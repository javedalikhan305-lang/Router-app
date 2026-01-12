import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import PageNotFound from './PageNotFound'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
  
    <Routes>
    
    <Route path='*' element={<PageNotFound/>} />
    <Route path='/' element={<Home/>} />
    <Route path='/products' element={<Product/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/Contact' element={<Contact/>} />



    </Routes>


    <Footer/>
    </BrowserRouter>

    
  )
}

export default App
