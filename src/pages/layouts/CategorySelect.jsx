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
	const placeholder = label
	return (
		<>
			<select
				className={`category-select ${selectedValue === '' ? 'placeholder-style' : ''}`}
				onChange={onChange}
				onBlur={onBlur}
				value={selectedValue}
			>

				<option value="" disabled hidden className="category-option-placeholder">
					{placeholder}
				</option>

				<CategorySelectOptions value={value} onChange={onChange} />
			</select >

		</>
	)
}
