import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MyCart from './pages/MyCart';
import ItemSelect from "./pages/ItemSelect";
import ItemDetails from "./pages/ItemDetails";



function App() {
  return (
       <BrowserRouter>
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/MyCart" element={<MyCart/>}/>
        <Route path="/ItemSelect" element={<ItemSelect/>}/>
        <Route path="/ItemDetails" element={<ItemDetails/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
