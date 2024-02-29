import { useController } from 'react-hook-form';
export default function RadioButtonCity({ control, name, value, label, rules }) {
	const {
		field: { onChange, onBlur, value: selectedValue },
	} = useController({
		name,
		control,
		defaultValue: '',
		rules
	});

	return (
		<>
			<input
				className="radio-city-select"
				type="radio"
				id={name + value}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				checked={selectedValue === value}
			/>

			<label
				htmlFor={name + value}
				className={`radio-city-select-label ${selectedValue === value ? 'active' : ''
					}`}
			>
				{label}
			</label>
		</>
	);
}