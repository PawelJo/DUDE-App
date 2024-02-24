import RadioButtonCity from './layouts/RadioButtonCity'
import Rootlayout from './layouts/RootLayout'
import { useForm } from "react-hook-form"

export default function Suggest() {

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm()
	const onSubmit = (data) => console.log(data)

	console.log(watch("city"))

	return (
		<Rootlayout >
			<div>Suggest a Vendor</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<RadioButtonCity id="Berlin" label="Berlin" value="Berlin" onChange={(value) => console.log(value)} />
				<input className='radio-city-select' type="radio" name="city" value="Wien" {...register("city", { required: true })} />
				<label className='radio-city-select-label' htmlFor="Wien">Wien</label>
				<select {...register("category")}>
					<option value="Döner">Döner</option>
					<option value="Späti">Späti</option>
				</select>
				<label htmlFor="name">Name des Ladens</label>
				<input {...register("name", { required: true })} />
				<label htmlFor="pros">Pros</label>
				<input {...register("pros", { required: true })} />
				<label htmlFor="cons">Cons</label>
				<input {...register("cons", { required: true })} />
				<label htmlFor="gmapsLink">Google Maps Link</label>
				<input {...register("gmapsLink", { required: true })} />

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
