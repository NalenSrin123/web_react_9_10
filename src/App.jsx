import Header from "./Components/Header"
import './App.css'
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import News from "./Pages/News"
import Contact from "./Pages/Contact"
import Notfound from "./Pages/Notfound"


const App = () => {
  return (
   <>
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <section>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/*" element={<Notfound/>}/>
          </Routes>
      </section>
      <Footer/>
    </BrowserRouter>
   </>
  )
}

export default App