
export default function MapsLink(mapsLink) {
	console.log("mapslink according to component: ", mapsLink)

	const { mapsLink: formattedMapsLink } = mapsLink;

	return (
		<a href={formattedMapsLink} className="gmaps-link">-- [OPEN IN GOOGLE MAPs] --</a>
	)
}
