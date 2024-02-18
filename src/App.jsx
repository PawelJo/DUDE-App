
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
import { useEffect } from 'react';


// pages




// layouts


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

      <Route path="/memegenerator" element={<MemeGenerator />} />
      <Route path="/entry" element={<Entry />} />

    </Route>
  )
)

function App() {


  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => {
        // Handle the data received from the server
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
