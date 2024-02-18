import { useEffect } from 'react';

export default function Döner() {
	useEffect(() => {
		fetch('http://localhost:8080/')
			.then(response => response.json())
			.then(data => {
				// Handle the data received from the server
				console.log(data);
			})
			.catch(error => {
				console.error('Error fetching data:', error);
			});
	}, []);
	return (
		<div>Döner</div>
	)
}
