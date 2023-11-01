import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './comoponents/Header'
import Navbar from './comoponents/Navbar'
import Home from './Home'
import Footer from './comoponents/Footer'

function App() {
  return (
    <div className='bg-slate-100 overflow-hidden'>
      <BrowserRouter >
        <Header />
        <Navbar />
        <div >
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>

        </div>
        <Footer />
      </BrowserRouter >
    </div>
  )
}

export default App
