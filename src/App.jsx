
import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Features from './Components/Features/Features';
import Customers from './Components/Customers/Customers';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <>
     <Home/>
     <About/>
     <Features/>
     <Customers/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
