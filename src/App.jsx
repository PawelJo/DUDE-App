
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
import Homepage from './pages/Homepage';



// pages




// layouts



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />}>
      </Route>

      <Route path="/memegenerator" element={<MemeGenerator />} />
      <Route path="/entry" element={<Entry />} />
      <Route path="/doener" element={<Doener />} />
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
