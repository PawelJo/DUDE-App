import RootLayout from './layouts/RootLayout'
import { useState } from 'react';
import { useEffect } from 'react';

import fetchSearchResults from './utility/fetchSearchResults';
import SearchResults from './layouts/SearchResults';

export default function Search() {

	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);


	useEffect(() => {
		const fetchData = async () => {

			const response = await fetchSearchResults(searchQuery);
			const data = await response.json();
			setSearchResults(data);
		}
		if (searchQuery.trim() !== '') {
			fetchData()
		} else {
			setSearchResults([]);
		}
	}, [searchQuery])

	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	}

	console.log("searchresults in search.jsx: ", searchResults)

	return (
		<RootLayout>

			<SearchResults searchQuery={searchQuery} searchResults={searchResults} handleInputChange={handleInputChange} />
		</RootLayout>
	)
}
