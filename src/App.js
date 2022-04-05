import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter,
  Routes,

  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Components from './components/Components';
import Templates from './components/Templates';
import Blog from './components/Blog';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Login from './components/Login';



function App() {
  return (
    <>
    {/* <Home/> */}
     <BrowserRouter>
    <Navbar/>



   
  {/* <Navbar/> */}
    <Routes>
        <Route path="/" element={<Components />}  />
        <Route path="templates" element={<Templates />} />
        <Route path="blog" element={<Blog />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="faq" element={<Faq />} />
        <Route path="logIn" element={<Login />} />
      </Routes>
      </BrowserRouter> 
  
    </>
  );
}

export default App;
