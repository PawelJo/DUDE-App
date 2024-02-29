import { useNavigate } from 'react-router-dom'

export default function BackButton() {

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1)
	}

	return (
		<button className="back-button" onClick={handleGoBack}>
			Go Back
		</button>
	)
}
