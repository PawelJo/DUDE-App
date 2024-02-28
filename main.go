package main

import (
	"database/sql"
	"dude/App"
	_ "dude/App"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

var db *sql.DB

func init() {
	// Load connection string from .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("failed to load env", err)
	}

	// Open a connection to PlanetScale
	db, err := sql.Open("mysql", os.Getenv("DSN"))
	/* 	fmt.Println(os.Getenv("DSN"))
	   	fmt.Println("DB", db) */
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}

	fmt.Println("connected to PlanetScale")

	// Test connection
	err = db.Ping()
	if err != nil {
		log.Fatalf("failed to ping: %v", err)
	}

	rows, err := db.Query("SHOW TABLES")
	if err != nil {
		log.Fatalf("failed to query: %v", err)
	}

	var tableName string
	for rows.Next() {
		if err := rows.Scan(&tableName); err != nil {
			log.Fatalf("failed to scan row: %v", err)
		}
		log.Println("found table: ", tableName)
	}
}

type Vendor struct {
	ID          int            `json:"id"`
	City        string         `json:"city"`
	Category    string         `json:"category"`
	VendorName  string         `json:"name"`
	Rating      int            `json:"rating"`
	Pros        string         `json:"pros"`
	Cons        string         `json:"cons"`
	GmapsLink   string         `json:"gmapsLink"`
	DateCreated string         `json:"dateCreated"`
	RuleText    string         `json:"ruleText"`
	Address     sql.NullString `json:"address"`
}
type VendorList struct {
	ID         int    `json:"id"`
	City       string `json:"city"`
	Category   string `json:"category"`
	VendorName string `json:"name"`
	RuleText   string `json:"ruleText"`
}

func options(w http.ResponseWriter, r *http.Request) {
	fmt.Println("calling OPTIONS function")
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

func getVendorsList(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Println("Lemme get that Data for you real quick")

	params := r.URL.Query()

	category := params.Get("category")

	db, err := sql.Open("mysql", os.Getenv("DSN"))

	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}

	query := "SELECT V.id, V.city, V.category, V.vendorName, R.ruleText FROM Vendors V JOIN Rules R ON V.category = R.category"

	if category != "" {
		query += fmt.Sprintf(" WHERE V.category = %s", category)
		fmt.Println(category)
	}
	fmt.Println(query)

	rows, err := db.Query(query)

	if err != nil {
		fmt.Println("Here we are fucked")
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var dataSlice []VendorList

	for rows.Next() {
		var d VendorList
		err := rows.Scan(&d.ID, &d.City, &d.Category, &d.VendorName, &d.RuleText)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			fmt.Println("we need the whole struct")
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
	/* fmt.Println(jsonData) */

	w.Write(jsonData)

}

func getEntry(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Println("Gettin' that entry for you")

	db, err := sql.Open("mysql", os.Getenv("DSN"))

	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}

	params := r.URL.Query()

	id := params.Get("id")

	query := "SELECT V.* FROM Vendors V"

	if id != "" {
		query += fmt.Sprintf(" WHERE V.id = %s", id)
		fmt.Println(id)
	}
	fmt.Println(query)

	rows, err := db.Query(query)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		fmt.Println("Here we are fucked")
		return
	}
	defer rows.Close()

	var dataSlice []Vendor

	for rows.Next() {
		var d Vendor
		err := rows.Scan(&d.ID, &d.City, &d.Category, &d.VendorName, &d.Rating, &d.Pros, &d.Cons, &d.GmapsLink, &d.DateCreated, &d.Address)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			fmt.Println("we need the whole struct")
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
	/* fmt.Println(jsonData) */
	w.Write(jsonData)

}

func addVendor(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	fmt.Println("calling addVendor function")
	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		fmt.Println("SHOIGU WHERE IS MY CORS RESPONSE")
		return
	}

	db, err := sql.Open("mysql", os.Getenv("DSN"))

	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}

	var newVendor Vendor

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		errorMsg := fmt.Sprintf("Error reading request body: %s", err)
		http.Error(w, errorMsg, http.StatusBadRequest)
	}

	err = json.Unmarshal(body, &newVendor)
	if err != nil {
		errorMsg := fmt.Sprintf("Error unmarshalling request body: %s", err)
		http.Error(w, errorMsg, http.StatusBadRequest)
	}

	address, err := App.Execute(newVendor.GmapsLink)
	if err != nil {
		fmt.Println("fetching address failed")
		return
	}
	fmt.Println(address)

	_, err = db.Exec("INSERT INTO Vendors (city, category, vendorName, rating, pros, cons, gmapsLink, dateCreated, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
		newVendor.City, newVendor.Category, newVendor.VendorName, newVendor.Rating, newVendor.Pros, newVendor.Cons, newVendor.GmapsLink, newVendor.DateCreated, address)
	fmt.Println("Pleas tell me this worked")
	if err != nil {
		fmt.Println("Dings hier ist einer krumm")
		errorMsg := fmt.Sprintf("Error inserting data: %s", err)
		http.Error(w, errorMsg, http.StatusInternalServerError)
	}

	w.WriteHeader(http.StatusOK)
	fmt.Println("Status is ok")

}

func main() {

	App.Execute("https://maps.app.goo.gl/cJ3WFivwvSo2aV65A")

	logFile, err := os.OpenFile("server-logger.log", os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatal("Failed to open log file: ", err)
	}
	defer logFile.Close()

	log.SetOutput(logFile)

	r := mux.NewRouter()
	r.HandleFunc("/", options).Methods(http.MethodOptions)
	r.HandleFunc("/vendors", options).Methods(http.MethodOptions)
	r.HandleFunc("/vendors", getVendorsList).Methods(http.MethodGet)
	r.HandleFunc("/entry", getEntry).Methods(http.MethodGet)
	r.HandleFunc("/suggest", addVendor).Methods(http.MethodPost)

	log.Fatal(http.ListenAndServe(":8080", r))
}
