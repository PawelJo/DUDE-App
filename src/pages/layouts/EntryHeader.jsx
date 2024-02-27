export default function EntryHeader(vendorData) {
	return (
		<div className="entry-header-container">
			<h1 className="entry-header">{vendorData.vendorData.name}</h1>
			<p className="entry-rating">Rated {vendorData.vendorData.rating}/10</p>
		</div>
	)
}
