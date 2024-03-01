

const fetchMeme = async (memeSetter, slug, setThreadLink) => {
	console.log("slug in fetchmeme: ", slug)
	const mainURL = 'https://meme-api.com/gimme/'
	const targetSub = slug
	const endPoint = mainURL + targetSub
	console.log("endpoint: ", endPoint)
	try {
		const response = await fetch(endPoint);
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data = await response.json();
		console.log(data)
		memeSetter({ data, loading: false, error: null })
		setThreadLink(data.postLink)

	}
	catch (error) {
		console.log('Error fetching data:', error)
	}


};

export default fetchMeme;