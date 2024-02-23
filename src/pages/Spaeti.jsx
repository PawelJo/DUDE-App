import { useState } from 'react';
import RootLayout from './layouts/RootLayout';
import VendorList from './layouts/VendorList';
import fetchList from './utility/fetchList';
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

			<VendorList data={fetchedData.data} loading={fetchedData.loading} />
		</RootLayout>
	)
}
