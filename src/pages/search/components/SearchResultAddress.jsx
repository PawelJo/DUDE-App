
export default function SearchResultAddress({ address }) {
	const { String: addressString } = address
	console.log("Address: ", address)
	const formattedAddress = addressString.split(/· |, /);
	console.log("Formatted Address: ", formattedAddress)
	return (
		<>
			{formattedAddress.length > 0 ? (
				<>


					<p
						className="search-result-item-address">
						{formattedAddress[1]}</p>
					<p
						className="search-result-item-address">
						{formattedAddress[2]}</p>

				</>
			)
				: null}
		</>
	)
}
