import { useForm } from "react-hook-form"
import RatingGroup from "./RatingGroup"

import { useState } from 'react'


export default function UpdateRating({ vendorData, setRatingCompleted }) {


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




	let userRatings = localStorage.getItem('userRatings') ? JSON.parse(localStorage.getItem('userRatings')) : []


	const onSubmit = async (data) => {
		setLoading(true);


		const formattedData = {
			id: vendorData.id,
			rating: parseInt(data.rating),
			oldrating: vendorData.rating,
			ratingcount: vendorData.ratingcount

		}
		console.log("formattedData: ", formattedData)

		const mainUrl = window.location.host.includes('localhost')
			?
			'http://localhost:8080'
			:
			'https://dude-q24d.onrender.com'

		const queryType = '/updateRating'
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
		console.log("Vendordata ID :" + vendorData.id)
		setLoading(false);

		userRatings.push(vendorData.id)
		localStorage.setItem('userRatings', JSON.stringify(userRatings))

		setTimeout(() => {
			setSubmitMessage('');
			setRatingCompleted(true);
		}, 3000);

	}

	const isRatingValid = !errors.rating

	return (
		<>

			{loading && <p className='loading-indicator'>Loading...</p>}


			{
				!userRatings.includes(vendorData.id) && (
					<form onSubmit={handleSubmit(onSubmit)}>
						<RatingGroup
							control={control}
							name="rating"
							rules={{ required: 'Give a rating' }}
							options={[
								{ value: '1', label: '1' },
								{ value: '2', label: '2' },
								{ value: '3', label: '3' },
								{ value: '4', label: '4' },
								{ value: '5', label: '5' },

							]}
						/>
						{isRatingValid ? null : (
							<p className="error-message">{errors.rating?.message}</p>
						)}
						<button className='submit-button' type="submit" >-- [ SEND RATING ] --</button>
					</form>
				)

			}
			{submitMessage && <p className='submit-message'>{submitMessage}</p>}

		</>
	)
}
