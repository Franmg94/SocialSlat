import './App.css'
import Footer from './components/Footer';
import Header from "./components/Header";
import EventDetails from './pages/EventDetailsPage';
import HomePage from './pages/HomePage'
import {Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/:eventId" element={<EventDetails />} />

      </Routes>
      
      <Footer />
    </>
  )
}

export default App
