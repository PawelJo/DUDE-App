import { useController } from 'react-hook-form';

const FormTextInput = ({ label, name, control, defaultValue, rules, ...rest }) => {
	const {
		field: { onChange, onBlur, value, name: fieldName, ref },
		fieldState: { invalid, error },
	} = useController({
		name,
		control,
		defaultValue,
		rules,
	});



	return (
		<div>
			<label>{label}</label>
			<input

				onChange={onChange}
				onBlur={onBlur}
				value={value}
				name={fieldName}
				ref={ref}
				{...rest}
			/>
			{invalid && <p className="error-message">{error?.message}</p>}
		</div>
	);
};

export default FormTextInput;
