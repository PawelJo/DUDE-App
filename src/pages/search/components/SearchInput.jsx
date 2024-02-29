export default function SearchInput({ searchQuery, handleInputChange }) {
	return (
		<input className='search-input'
			value={searchQuery}
			onChange={handleInputChange}
			placeholder='Search' />
	)
}
