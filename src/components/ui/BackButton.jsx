import { useLocation, useNavigate } from 'react-router-dom'

export default function BackButton() {

	const navigate = useNavigate();
	const location = useLocation();

	const handleGoBack = () => {
		if (window.history.length > 1) {
			navigate(-1)
		}
		else {
			navigate('/')
		}

	}

	return (
		<button className="back-button" onClick={handleGoBack}>
			Go Back
		</button>
	)
}
