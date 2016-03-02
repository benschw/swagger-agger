package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func GetJavascript(res http.ResponseWriter, req *http.Request) {
	data, err := Asset("dist/app.js")
	if err != nil {
		panic(err)
	}
	res.Write(data)
}

type Widget struct {
	Id      int    `json:"id"`
	Message string `json:"message"`
}

type WidgetResource struct {
	widgets []*Widget
}

func (w *WidgetResource) addWidget(res http.ResponseWriter, req *http.Request) {
	widget := &Widget{}

	decoder := json.NewDecoder(req.Body)
	if err := decoder.Decode(widget); err != nil {
		panic(err)
	}
	b, err := json.Marshal(widget)
	if err != nil {
		panic(err)
	}
	body := string(b[:])

	widget.Id = len(w.widgets) + 1
	w.widgets = append(w.widgets, widget)

	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusCreated)
	fmt.Fprint(res, body)

}
func (w *WidgetResource) findAllWidgets(res http.ResponseWriter, req *http.Request) {
	callback := req.FormValue("callback")
	b, err := json.Marshal(w.widgets)
	if err != nil {
		res.Header().Set("Content-Type", "application/json")
		res.WriteHeader(http.StatusOK)
		fmt.Fprint(res, err)
		return
	}
	body := string(b[:])

	res.Header().Set("Content-Type", "application/json")
	res.WriteHeader(http.StatusOK)

	if callback != "" {
		fmt.Fprintf(res, "%s(%s)", callback, body)
	} else {
		fmt.Fprintf(res, "%s", body)
	}
}
func (w *WidgetResource) deleteWidget(res http.ResponseWriter, req *http.Request) {
}
func corsHandler(h http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "OPTIONS" {
			//handle preflight in here
		} else {
			h.ServeHTTP(w, r)
		}
	}
}

func main() {

	resource := &WidgetResource{[]*Widget{
		&Widget{Id: 1, Message: "Hello World"},
		&Widget{Id: 2, Message: "Hello Solar System"},
		&Widget{Id: 3, Message: "Hello Galaxy"},
	}}

	r := mux.NewRouter()

	r.HandleFunc("/api/widget", resource.addWidget).Methods("POST")
	r.HandleFunc("/api/widget", resource.findAllWidgets).Methods("GET")
	r.HandleFunc("/api/widget/{id}", resource.deleteWidget).Methods("DELETE")

	r.HandleFunc("/assets/app.js", GetJavascript).Methods("GET")

	serveMux := http.NewServeMux()
	serveMux.Handle("/", r)
	handler := cors.Default().Handler(serveMux)

	http.ListenAndServe(":8000", handler)
}
