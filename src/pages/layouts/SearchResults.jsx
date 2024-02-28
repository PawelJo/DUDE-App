import { NavLink } from "react-router-dom"

export default function SearchResults({ searchQuery, searchResults, handleInputChange }) {
	console.log("searchResults in searchresults.jsx: ", searchResults)


	return (
		<>
			<input className='form-input' value={searchQuery} onChange={handleInputChange} placeholder='Search' />
			{searchResults ? (
				<ul>
					{searchResults.map((result) => (
						<li key={result.id}>
							<NavLink className={"entry-nav-link"} to={`/entry/${result.id}`}>{result.name}</NavLink>
						</li>
					))}
				</ul>) : null}
		</>
	)
}
