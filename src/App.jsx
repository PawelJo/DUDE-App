
import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Entry from './pages/Entry';
import RootLayout from './pages/layouts/RootLayout';
import MemeGenerator from './pages/MemeGenerator';
import Doener from './pages/Doener';



// pages




// layouts



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

      <Route path="/memegenerator" element={<MemeGenerator />} />
      <Route path="/entry" element={<Entry />} />
      <Route path="/doener" element={<Doener />} />

    </Route>
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
