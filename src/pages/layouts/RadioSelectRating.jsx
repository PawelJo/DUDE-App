import { useController } from 'react-hook-form';
export default function RadioSelectRating({ control, name, value, label, rules }) {
	const {
		field: { onChange, onBlur, value: selectedValue },
	} = useController({
		name,
		control,
		defaultValue: undefined,
		rules
	});

	return (
		<>
			<input
				className="radio-rating-select"
				type="radio"
				id={name + value}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				checked={selectedValue === value}
			/>

			<label
				htmlFor={name + value}
				className={`radio-rating-select-label ${selectedValue === value ? 'active' : ''
					}`}
			>
				{label}
			</label>
		</>
	);
}