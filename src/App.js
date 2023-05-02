import React from "react";
import GlobalStyle from './globalStyles';
import HomePages from "./pages/HomePages";
import SignupPages from "./pages/SignupPages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";



/* 
    Biblioteca instaladas 

    "framer-motion": "^10.12.2",
    "react-dom": "^18.2.0",
    "react-icons": "^4.8.0",
    "react-intersection-observer": "^9.4.3",
    "react-modal": "^3.16.1",
    "react-router-dom": "^6.10.0",
    "react-scripts": "5.0.1",
    "react-scroll": "^1.8.9",
    "styled-components": "^5.3.9",

*/


function App() {
  return (
   <Router>
    <GlobalStyle />
    <Routes>
      <Route exact path="/" element={<HomePages />} />
      <Route path="/sign-up" element={<SignupPages />} />    
    </Routes>
    <Footer />
   </Router> 
   
  );
}

export default App;
