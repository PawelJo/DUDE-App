package App

import (
	"log"
	"net/http"
	"strings"

	"github.com/PuerkitoBio/goquery"
)

func getContentByAttributes(url, content, property string) (string, error) {
	// Make an HTTP request to the specified URL
	response, err := http.Get(url)
	if err != nil {
		return "", err
	}
	defer response.Body.Close()

	// Parse the HTML content
	doc, err := goquery.NewDocumentFromReader(response.Body)
	if err != nil {
		return "", err
	}

	// Find the meta element with specified attributes and dynamic content
	var foundContent string
	doc.Find("meta").Each(func(i int, s *goquery.Selection) {
		metaContent, exists := s.Attr("content")
		metaProperty, existsProperty := s.Attr("property")

		if exists && existsProperty && strings.Contains(metaContent, content) && metaProperty == property {
			foundContent = metaContent
			return
		}
	})

	return foundContent, nil
}

func Execute(queryURL string) (string, error) {
	// Example usage
	url := queryURL
	contentIdentifier := ""
	propertyIdentifier := "og:title"

	content, err := getContentByAttributes(url, contentIdentifier, propertyIdentifier)
	if err != nil {
		log.Fatal(err)
		return "", err
	}
	return content, nil
	/* fmt.Printf("Content from meta element: %s\n", content) */
}
