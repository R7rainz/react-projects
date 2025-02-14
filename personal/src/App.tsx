import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div className='min-h-full mb-4'>
        <Header />
        <main className='flex-grow'>
          <Routes>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
