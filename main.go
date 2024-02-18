package main

import (
	"encoding/json"
	"log"
	"math/rand"
	"net/http"
	"time"
)

func options(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"message": "options called"}`))
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func get(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	users := getUsers()

	rand.Seed(time.Now().UnixNano())
	randomIndex := rand.Intn(len(users))

	user, err := json.Marshal(users[randomIndex])
	if err != nil {
		panic(err)
	}

	w.Write(user)
}

func main() {

	r := mux.NewRouter()
	r.HandleFunc("/", get).Methods(http.MethodGet)
	r.HandleFunc("/", options).Methods(http.MethodOptions)
	log.Fatal(http.ListenAndServe(":8080", r))
}
