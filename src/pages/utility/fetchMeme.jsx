

const fetchMeme = async (memeSetter) => {
	try {
		const response = await fetch('https://meme-api.com/gimme/FlorkofCowsOfficial');
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const data = await response.json();
		console.log(data)
		memeSetter({ data, loading: false, error: null })
	}
	catch (error) {
		console.log('Error fetching data:', error)
	}


};

export default fetchMeme;