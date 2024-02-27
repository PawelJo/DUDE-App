import RadioButtonCity from './layouts/RadioButtonCity'
import Rootlayout from './layouts/RootLayout'
import { useForm } from "react-hook-form"
import FormTextInput from './layouts/FormTextInput'
import CategorySelect from './layouts/CategorySelect'

export default function Suggest() {

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		control
	} = useForm()
	const onSubmit = async (data) => {
		console.log(data)

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
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
	}

	console.log(watch("category"))

	return (
		<Rootlayout >
			<div>Suggest a Vendor</div>

			<form onSubmit={handleSubmit(onSubmit)}>
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

				{/* <select
					{...register("category")}>
					<option value="Döner">Döner</option>
					<option value="Späti">Späti</option>
				</select> */}
				<CategorySelect
					name="category"
					control={control}
					value={["Späti", "Döner", "Hurensohn"]}
					label="Category"
				/>

				<FormTextInput
					label="Name des Vendors"
					name="name"
					control={control}
					defaultValue=""
					rules={{ required: "Hurensohn is required" }} />


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

				<input type="radio" name="rating" value="1" {...register("rating", { required: true })} />
				<label htmlFor="1">1</label>
				<input type="radio" name="rating" value="2" {...register("rating", { required: true })} />
				<label htmlFor="2">2</label>
				<input type="radio" name="rating" value="3" {...register("rating", { required: true })} />
				<label htmlFor="3">3</label>
				<input type="radio" name="rating" value="4" {...register("rating", { required: true })} />
				<label htmlFor="4">4</label>
				<input type="radio" name="rating" value="5" {...register("rating", { required: true })} />
				<label htmlFor="5">5</label>


				{errors.exampleRequired && <span>This field is required</span>}

				<input type="submit" />
			</form>


		</Rootlayout>
	)
}
