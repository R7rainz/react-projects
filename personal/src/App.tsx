import './App.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
function App() {

  return (
    <Router>
      <div className='min-h-full mb-4'>
        <Route>
          <Header />
        </Route>
      </div>
    </ Router>
  )
}

export default App
