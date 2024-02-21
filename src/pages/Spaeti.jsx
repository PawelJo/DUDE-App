import { useState } from 'react';
import RootLayout from './layouts/RootLayout';
import VendorGetter from './utility/VendorGetter';
import VendorList from './layouts/VendorList';

export default function Spaeti() {


	const slug = '"Späti"'
	const [fetchedData, setFetchedData] = useState({
		data: [],
		loading: true,
		error: null,
	})



	return (
		<RootLayout>
			<h1>Späti</h1>

			<VendorGetter slug={slug} onDataFetched={setFetchedData} />
			<VendorList data={fetchedData.data} loading={fetchedData.loading} />

		</RootLayout>
	)
}
