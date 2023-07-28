import React from 'react'
import { BrowserRouter ,Route , Routes } from 'react-router-dom'
import Homepage from './Pages/Home';
import Pricingpage from './Pages/Pricingpage';
import FAQpage from './Pages/FAQpage';
import Contactpage from './Pages/Contactpage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/pricing' element={<Pricingpage />}></Route>
      <Route path='/faqQ' element={<FAQpage />}></Route>
      <Route path='/contact' element={<Contactpage />}></Route>

    </Routes>
       
    </BrowserRouter>
  );
}

export default App;
