

export default function CategorySelectOptions(values) {


	return (
		<>
			{values.value.map((item) => (
				<option className="category-option" key={item}
					value={item}

				>
					{item}
				</option>
			))}
		</>
	);
}
