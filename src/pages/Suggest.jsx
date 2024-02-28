import RadioButtonCity from './layouts/RadioButtonCity'
import Rootlayout from './layouts/RootLayout'
import { useForm } from "react-hook-form"
import FormTextInput from './layouts/FormTextInput'
import CategorySelect from './layouts/CategorySelect'
import { useState } from 'react'
import RatingGroup from './layouts/RatingGroup'

export default function Suggest() {

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		control,
		reset
	} = useForm()

	const [loading, setLoading] = useState(false)
	const [submitMessage, setSubmitMessage] = useState('')


	const onSubmit = async (data) => {
		setLoading(true);


		const dateAndTimeStamp = new Date().toISOString();
		const dateStamp = dateAndTimeStamp.split('T')[0];



		const formattedData = {
			category: data.category,
			city: data.city,
			name: data.name,
			pros: data.pros,
			cons: data.cons,
			rating: parseInt(data.rating),
			gmapsLink: data.gmapsLink,
			dateCreated: dateStamp
		}
		console.log("formattedData: ", formattedData)

		const mainUrl = window.location.host.includes('localhost')
			?
			'http://localhost:8080'
			:
			'https://dude-q24d.onrender.com'

		const queryType = '/suggest'
		const URL = mainUrl + queryType

		const response = await fetch(URL, {
			method: 'POST',
			mode: 'no-cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formattedData),
		});
		console.log(formattedData)


		if (response.type === 'opaque') {
			reset();
			setSubmitMessage('Submitted successfully!');
		} else {
			setSubmitMessage('Submission failed. Please try again later.');
		}
		setLoading(false);

		setTimeout(() => {
			setSubmitMessage('');
		}, 3000);

	}

	const isCityValid = !errors.city

	return (
		<Rootlayout >
			<p className='suggest-header'>Suggest a Vendor</p>

			<form onSubmit={handleSubmit(onSubmit)}>


				{loading && <p className='loading-indicator'>Loading...</p>}

				{submitMessage && <p className='submit-message'>{submitMessage}</p>}


				<div className='radio-city-wrapper'>
					<RadioButtonCity
						name="city"
						label="Berlin"
						value="Berlin"
						rules={{ required: "City is required" }}
						control={control} />
					<RadioButtonCity
						name="city"
						label="Wien"
						value="Wien"
						rules={{ required: "City is required" }}
						control={control} />
				</div>

				{isCityValid ? null : (
					<p className="error-message">{errors.city?.message}</p>
				)}
				<FormTextInput
					label="Name des Vendors"
					name="name"
					control={control}
					defaultValue=""
					rules={{ required: "Name is required" }} />
				<CategorySelect
					name="category"
					control={control}
					value={["Späti", "Döner"]}
					label="Category"
					rules={{ required: "Category is required" }}
				/>

				<FormTextInput
					label="pros"
					name="pros"
					control={control}
					defaultValue=""
					rules={{ required: "Sag was gut ist daran" }} />

				<FormTextInput
					label="cons"
					name="cons"
					control={control}
					defaultValue=""
					rules={{ required: "Was ist kacke" }} />

				<FormTextInput
					label="Google Maps Link"
					name="gmapsLink"
					control={control}
					defaultValue=""
					rules={{ required: "Sag mal jetzt, wo ist diese?" }} />


				<RatingGroup
					control={control}
					name="rating"
					options={[
						{ value: '1', label: '1' },
						{ value: '2', label: '2' },
						{ value: '3', label: '3' },
						{ value: '4', label: '4' },
						{ value: '5', label: '5' },

					]}
				/>





				<button className='submit-button' type="submit" >-- [ SEND ] --</button>
			</form>


		</Rootlayout>
	)
}
