const fetchList = async (slug, onDataFetched) => {
	const mainUrl = 'http://localhost:8080/entry?id=';
	try {
		const encodedSlug = slug
		const endpoint = mainUrl + encodedSlug
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