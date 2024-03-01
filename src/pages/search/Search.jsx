import RootLayout from '../layouts/RootLayout.jsx'
import { useState } from 'react';
import { useEffect } from 'react';

import fetchSearchResults from '../utility/fetchSearchResults.jsx';
import SearchResults from './components/SearchResults.jsx';

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


	return (
		<RootLayout>

			<SearchResults
				searchQuery={searchQuery}
				searchResults={searchResults}
				handleInputChange={handleInputChange}
			/>
		</RootLayout>
	)
}