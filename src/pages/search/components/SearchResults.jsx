import { NavLink } from "react-router-dom"
import SearchResultAddress from "./SearchResultAddress.jsx"
import SearchInput from "./SearchInput.jsx"

export default function SearchResults({ searchQuery, searchResults, handleInputChange }) {

	return (
		<>
			<SearchInput
				searchQuery={searchQuery}
				handleInputChange={handleInputChange}
			/>

			{searchResults ?
				(
					<ul className="search-results-list">
						{searchResults.map((result) => (
							<li
								className="search-results-list-item"
								key={result.id}>
								<NavLink
									className={"search-nav-link"}
									to={`/entry/${result.id}`}>
									{result.name}
								</NavLink>

								<SearchResultAddress address={result.address} />

							</li>
						))}
					</ul>
				)
				:
				null}
		</>
	)
}
