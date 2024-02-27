import { useController } from 'react-hook-form';
import { useState } from 'react';

const FormTextInput = ({ label, name, control, defaultValue, rules, ...rest }) => {
	const {
		field: { onChange, value, name: fieldName, ref },
		fieldState: { invalid, error },
	} = useController({
		name,
		control,
		defaultValue,
		rules,
	});

	const [placeholderVisible, setPlaceholderVisible] = useState(true);
	const placeholder = label

	return (
		<>
			{/* <label className='form-label'>{label}</label> */}
			<input
				className="form-input"
				type="text"
				onChange={onChange}
				placeholder={placeholderVisible ? placeholder : ''}
				onFocus={() => setPlaceholderVisible(false)}
				onBlur={() => setPlaceholderVisible(true)}
				value={value}
				name={fieldName}
				ref={ref}
				{...rest}
			/>
			{invalid && <p className="error-message">{error?.message}</p>}
		</>
	);
};

export default FormTextInput;
