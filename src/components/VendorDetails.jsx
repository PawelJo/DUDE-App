import { useState, useEffect } from 'react';
import fetchList from './utility/fetchList';

const VendorDetails = () => {
	const slug = '"Döner"';
	const [fetchedData, setFetchedData] = useState({
		data: [],
		loading: true,
		error: null,
	});

	useEffect(() => {
		fetchList(slug, setFetchedData);
	}, [slug, setFetchedData]);

	if (fetchedData.loading) return <div>Loading...</div>;

	console.log("fetchedData according to vendordetails: ", fetchedData.data);

	return <div>{fetchedData.data[0].name}</div>;
};

export default VendorDetails;
