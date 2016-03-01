package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

type Widget struct {
	widgets []string
}

func (w *Widget) addWidget(res http.ResponseWriter, req *http.Request) {
	w.widgets = append(w.widgets, "foo")
}
func (w *Widget) findAllWidgets(res http.ResponseWriter, req *http.Request) {

}
func (w *Widget) deleteWidget(res http.ResponseWriter, req *http.Request) {
}

func main() {

	resource := &Widget{}

	r := mux.NewRouter()

	r.HandleFunc("/api/widget", resource.addWidget).Methods("POST")
	r.HandleFunc("/api/widget", resource.findAllWidgets).Methods("GET")
	r.HandleFunc("/api/widget/{id}", resource.deleteWidget).Methods("DELETE")

	http.Handle("/", r)
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("./dist"))))

	http.ListenAndServe(":8000", nil)
}
