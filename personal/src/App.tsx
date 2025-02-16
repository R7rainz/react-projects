import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import GetStarted from './components/Getstarted'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className='min-h-full mb-4'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
