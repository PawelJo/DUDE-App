
import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Entry from './pages/Entry/Entry.jsx';
import MemeGenerator from './pages/memeGenerator/MemeGenerator.jsx';
import Doener from './pages/categoryPages/Doener.jsx';
import Spaeti from './pages/categoryPages/Spaeti.jsx'
import Homepage from './pages/Homepage';
import Suggest from './pages/suggest/Suggest.jsx';
import Search from './pages/search/Search.jsx';
import Frisoer from './pages/categoryPages/Frisoer.jsx';
import Toiletten from './pages/categoryPages/Toiletten.jsx';
import Bars from './pages/categoryPages/Bars.jsx';



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
      <Route className="main-nav-link" path="/toiletten" element={<Toiletten />} />
      <Route className="main-nav-link" path="/bars" element={<Bars />} />
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
