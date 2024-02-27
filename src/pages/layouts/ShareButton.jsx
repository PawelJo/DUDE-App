import { useEffect } from 'react';

const ShareButton = () => {
	useEffect(() => {
		// Check if the Web Share API is supported by the browser
		if (navigator.share) {
			const handleShare = async () => {
				try {
					// Use the Web Share API to share the current URL
					await navigator.share({
						title: document.title,
						url: window.location.href,
					});
					console.log('Shared successfully');
				} catch (error) {
					console.error('Error sharing:', error);
				}
			};

			// Add a click event listener to the share button
			const shareButton = document.getElementById('shareButton');
			shareButton.addEventListener('click', handleShare);

			// Cleanup the event listener when the component is unmounted
			return () => {
				shareButton.removeEventListener('click', handleShare);
			};
		} else {
			// If Web Share API is not supported, you can provide a fallback or hide the button
			console.warn('Web Share API is not supported in this browser.');
		}
	}, []);

	return (
		<div id="shareButtonContainer">
			<button className="share-button" id="shareButton">-- Share --</button>
		</div>
	);
};

export default ShareButton;
