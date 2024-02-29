
export default function AddressText(addressText) {

	const formattedAddress = addressText.addressText.split(/· |, /);

	return (
		<div className="address-block">
			<div>Address:</div>
			<div>{formattedAddress[1]},</div>
			<div>{formattedAddress[2]}</div>
		</div>
	)
}
