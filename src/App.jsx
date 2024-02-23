
import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Entry from './pages/Entry';
import MemeGenerator from './pages/MemeGenerator';
import Doener from './pages/Doener';
import Spaeti from './pages/Spaeti'
import Homepage from './pages/Homepage';
import VendorDetails from './pages/VendorDetails';



// pages




// layouts



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />}>
      </Route>

      <Route path="/memegenerator" element={<MemeGenerator />} />
      <Route path="/entry/:id" element={<Entry />} />
      <Route path="/spaeti" element={<Spaeti />} />
      <Route path="/doener" element={<Doener />} />
      <Route path="/vendordetails" element={<VendorDetails />} />
    </>
  )
)

function App() {

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
