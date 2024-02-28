const fetchSearchResults = async (searchQuery) => {

	const mainUrl = window.location.host.includes('localhost') ? 'http://localhost:8080' : 'https://dude-q24d.onrender.com'
	const queryType = '/search?query='
	const endpoint = mainUrl + queryType + searchQuery


	const response = await fetch(endpoint);


	if (!response.ok) {
		throw new Error('Network response was not ok')
	}

	console.log(response)
	return response;
}

export default fetchSearchResults