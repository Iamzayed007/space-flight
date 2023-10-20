
import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './views/Home/Home';
import { DataProvider } from './contexts/DataContext'
function App() {

  return (
    <>
    <DataProvider>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={ <Home/>}>
     
    </Route>
   </Routes>
    </BrowserRouter>
    </DataProvider>
    </>
  )
}

export default App
