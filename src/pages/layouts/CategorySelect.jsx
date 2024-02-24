import { useController } from "react-hook-form"
import CategorySelectOptions from "./CategorySelectOptions"

export default function CategorySelect({ control, name, value, label }) {



	const {
		field: { onChange, onBlur, value: selectedValue },
	} = useController({
		name,
		control,
		defaultValue: '',
	})
	return (
		<>
			<select
				className="category-select"
				onChange={onChange}
				onBlur={onBlur}
				value={selectedValue}
			>
				{/* 				<option value="Döner">Döner</option>
				<option value="Späti">Späti</option> */}
				<CategorySelectOptions value={value} onChange={onChange} />
			</select>

			<label
				htmlFor="category"
			>
				{label}
			</label>
		</>
	)
}
