
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
import Suggest from './pages/Suggest';
import Search from './pages/Search';
import Frisoer from './pages/Frisoer';



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
      <Route className="main-nav-link" path="/frisoer" element={<Frisoer />} />
      <Route className="main-nav-link" path="/suggest" element={<Suggest />} />
      <Route className="main-nav-link" path="/search" element={<Search />} />
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
