
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

      <Route className="main-nav-link" path="/memegenerator" element={<MemeGenerator />} />
      <Route className="main-nav-link" path="/entry/:id" element={<Entry />} />
      <Route className="main-nav-link" path="/spaeti" element={<Spaeti />} />
      <Route className="main-nav-link" path="/doener" element={<Doener />} />
      <Route className="main-nav-link" path="/vendordetails" element={<VendorDetails />} />
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
