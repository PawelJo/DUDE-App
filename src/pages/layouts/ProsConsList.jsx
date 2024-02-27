
export default function ProsConsList(props) {
	const { title, list } = props
	return (
		<>
			<p className="pro-con-header">{title}</p>
			{list.map((pro, index) => (
				<p className="pro-con-entry" key={index}>{pro}</p>
			))}
		</>
	)
}

