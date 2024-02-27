const fetchList = async (slug, onDataFetched) => {
	const mainUrl = window.location.host.includes('localhost') ? 'http://localhost:8080' : 'https://dude-q24d.onrender.com'
	try {
		const encodedSlug = slug
		const queryType = '/entry?id='
		const endpoint = mainUrl + queryType + encodedSlug
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		onDataFetched({ data, loading: false, error: null });
		console.log("fetchList say: ", data)
	} catch (error) {
		console.error('Error fetching data:', error);
		onDataFetched({ data: [], loading: false, error });
	}
};

export default fetchList;