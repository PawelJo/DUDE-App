
import { useNavigate } from 'react-router-dom';


function NavigationButtons() {

	const history = useNavigate();

	const goToMemeGenerator = () => {
		history.push('/memegenerator')
	}

	const goToEntry = () => {
		history.push('/entry')
	}


	return (
		<div>
			<button onClick={goToMemeGenerator}>Go to Memegenerator</button>
			<button onClick={goToEntry}>Go to Entry</button>
		</div>
	)
}

export default NavigationButtons