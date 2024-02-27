import { useState, useEffect } from 'react';
import RootLayout from './layouts/RootLayout';
import VendorList from './layouts/VendorList';
import fetchList from './utility/fetchList';


export default function Doener() {


	const slug = '"Döner"'
	const [fetchedData, setFetchedData] = useState({
		data: [],
		loading: true,
		error: null,
	})

	useEffect(() => {
		fetchList(slug, setFetchedData);
	}, [slug, setFetchedData]);

	return (
		<RootLayout>
			<h1>Döner</h1>
			<h2>-- Regeln</h2>
			<VendorList className="vendor-list" data={fetchedData.data} loading={fetchedData.loading} />
		</RootLayout>
	)
}
