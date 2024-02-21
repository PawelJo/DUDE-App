
const VendorList = ({ data, loading, error }) => {
	if (loading) {
		return <p>Loading data...</p>;
	}

	if (error) {
		return <p>Error fetching data: {error.message}</p>;
	}

	const rawRuleText = data[0].ruleText
	const splitRuleText = rawRuleText.split('  ')
	const formattedRuleText = [];

	for (let i = 0; i < splitRuleText.length; i++) {
		formattedRuleText.push(<span className="rule-entry" key={i}>{splitRuleText[i]}</span>)
		formattedRuleText.push(<br key={i + 200} />)
	}

	return (
		<>
			<div className="rules-container">{formattedRuleText}</div>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Category</th>
						<th>Vendor name</th>
						<th>Rating</th>
						{/* Add other table headers as needed */}
					</tr>
				</thead>
				<tbody>
					{data.map(item => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.category}</td>
							<td>{item.name}</td>
							<td>{item.rating}</td>
							{/* Add other table cells as needed */}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default VendorList;