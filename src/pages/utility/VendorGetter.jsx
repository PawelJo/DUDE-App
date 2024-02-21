import { useEffect } from "react";

const VendorGetter = ({ slug, onDataFetched }) => {
	const mainUrl = 'http://localhost:8080/vendors?category=';
	/* 	const [loading, setLoading] = useState(true);
		const [error, setError] = useState(null); */

	useEffect(() => {
		const fetchData = async () => {
			try {
				const encodedSlug = encodeURIComponent(slug);
				const endpoint = mainUrl + encodedSlug
				const response = await fetch(endpoint);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await response.json();
				onDataFetched({ data, loading: false, error: null });
			} catch (error) {
				console.error('Error fetching data:', error);
				onDataFetched({ data: [], loading: false, error });
			}
		};

		fetchData();
	}, [slug, onDataFetched]);

	return null;
};

export default VendorGetter;