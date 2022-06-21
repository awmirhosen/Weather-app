import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/Home';
import Post from './components/pages/Posts'
import Services from './components/pages/Services'
import {BrowserRouter, Router, Routes , Route} from "react-router-dom";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar />} />
            <Route path='/posts' element={<Post />} />
            <Route path='/services' element={<Services />} />
            <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        </BrowserRouter>
   </>
  );
}

export default App;
