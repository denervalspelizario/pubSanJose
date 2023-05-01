import React from "react";
import GlobalStyle from './globalStyles';
import HomePages from "./pages/HomePages";
import SignupPages from "./pages/SignupPages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer/Footer";



// bibiotecas instaladas - React icons 
//

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
