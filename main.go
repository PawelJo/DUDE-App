package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"

	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

var db *sql.DB

func init() {
	connStr := "root:L5Y8MUmK9w4%p!@tcp(localhost:3306)/dude"
	var err error
	db, err = sql.Open("mysql", connStr)
	if err != nil {
		log.Fatal(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

}

type Vendor struct {
	ID          int    `json:"id"`
	Category    string `json:"category"`
	VendorName  string `json:"name"`
	Rating      int    `json:"rating"`
	Pros        string `json:"pros"`
	Cons        string `json:"cons"`
	GmapsLink   string `json:"gmapsLink"`
	DateCreated string `json:"dateCreated"`
}

func options(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"message": "options called"}`))
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func get(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Println("Lemme get that Data for you real quick")
	rows, err := db.Query("SELECT * FROM Vendors")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var dataSlice []Vendor

	for rows.Next() {
		var d Vendor
		err := rows.Scan(&d.ID, &d.Category, &d.VendorName, &d.Rating, &d.Pros, &d.Cons, &d.GmapsLink, &d.DateCreated)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		dataSlice = append(dataSlice, d)
	}

	if err := rows.Err(); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	jsonData, err := json.Marshal(dataSlice)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write(jsonData)

}

func main() {

	r := mux.NewRouter()
	r.HandleFunc("/", get).Methods(http.MethodGet)
	r.HandleFunc("/", options).Methods(http.MethodOptions)
	log.Fatal(http.ListenAndServe(":8080", r))
}
