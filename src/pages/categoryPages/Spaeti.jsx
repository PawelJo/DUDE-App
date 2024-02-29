import { useState } from 'react';
import RootLayout from '../layouts/RootLayout.jsx';
import VendorList from './components/VendorList.jsx';
import fetchList from '../utility/fetchList.jsx';
import { useEffect } from 'react';

export default function Spaeti() {


	const slug = '"Späti"'
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
			<h1>Späti</h1>
			<h2>-- Regeln</h2>
			<VendorList data={fetchedData.data} loading={fetchedData.loading} />
		</RootLayout>
	)
}
