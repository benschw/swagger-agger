package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
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
	fmt.Fprintf(res, "%s(%s)", callback, body)
}
func (w *WidgetResource) deleteWidget(res http.ResponseWriter, req *http.Request) {
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

	http.Handle("/", r)

	http.ListenAndServe(":8000", nil)
}
