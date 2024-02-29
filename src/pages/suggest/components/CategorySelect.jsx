import { useController } from "react-hook-form"
import CategorySelectOptions from "../../../components/ui/CategorySelectOptions.jsx"

export default function CategorySelect({ control, name, value, label, rules }) {



	const {
		field: { onChange, onBlur, value: selectedValue },
		fieldState: { invalid, error },
	} = useController({
		name,
		control,
		defaultValue: '',
		rules
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
			{invalid && <p className="error-message">{error?.message}</p>}

		</>
	)
}
