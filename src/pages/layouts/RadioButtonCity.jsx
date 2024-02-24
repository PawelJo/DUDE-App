
export default function RadioButtonCity({ id, value, label, onChange }) {

	return (
		<>
			<input type="radio" id={id} value={value} onChange={onChange} style={{ display: 'none' }} />
			<label htmlFor={id} onClick={() => onChange(value)} style={{ flex: 1, padding: '10px', border: '1px solid #ccc', textAlign: 'center', cursor: 'pointer' }}>{label}</label>
		</>
	);
}
