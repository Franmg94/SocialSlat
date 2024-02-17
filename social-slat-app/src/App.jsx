import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import {Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      
    </>
  )
}

export default App
