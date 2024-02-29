import { useState, useEffect } from 'react';
import RootLayout from '../layouts/RootLayout.jsx';
import VendorList from './components/VendorList.jsx';
import fetchList from '../utility/fetchList.jsx';


export default function Frisoer() {


	const slug = '"Frisör"'
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
			<h1>Frisör</h1>
			<h2>-- Regeln</h2>
			<VendorList className="vendor-list" data={fetchedData.data} loading={fetchedData.loading} />
		</RootLayout>
	)
}
