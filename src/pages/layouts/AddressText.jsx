
export default function AddressText(addressText) {
	console.log("the address is: ", addressText.addressText)
	console.log("the type is ", typeof (addressText.addressText))


	const formattedAddress = addressText.addressText.split(/· |, /);
	console.log(formattedAddress)
	return (
		<>
			<div>Address:</div>
			<div>{formattedAddress[1]},</div>
			<div>{formattedAddress[2]}</div>
		</>
	)
}
