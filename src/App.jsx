import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  Route,
  NavLink,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Entry from './pages/Entry';
import RootLayout from './pages/layouts/RootLayout';
import MemeGenerator from './pages/MemeGenerator';


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


  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
