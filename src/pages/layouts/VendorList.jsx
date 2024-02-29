import CityList from "./CityList";

const VendorList = ({ data, loading, error }) => {
	if (loading) {
		return <p>Loading data...</p>;
	}

	if (error) {
		return <p>Error fetching data: {error.message}</p>;
	}


	const berlinVendors = []
	const viennaVendors = []

	const rawRuleText = data[0].ruleText
	const splitRuleText = rawRuleText.split('  ')
	const formattedRuleText = [];

	for (let i = 0; i < splitRuleText.length; i++) {
		formattedRuleText.push(<span className="rule-entry" key={i}>{splitRuleText[i]}</span>)
		formattedRuleText.push(<br key={i + 200} />)
	}

	data.map(item => {
		if (item.city == "Berlin") {
			berlinVendors.push(item)
		}
		else if (item.city == "Wien") {
			viennaVendors.push(item)
		}
		else {
			console.log("Couldn't match city")
		}
	})

	console.log(formattedRuleText)

	return (
		<>
			{formattedRuleText.map((item) => (
				<div className="rule-text" key={item}>
					{item}
				</div>
			))}
			<CityList vendors={berlinVendors} city='Berlin' />
			<CityList vendors={viennaVendors} city='Wien' />


		</>
	);
};

export default VendorList;