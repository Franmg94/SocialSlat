import './App.css'
import Footer from './components/Footer';
import Header from "./components/Header";
import EventDetails from './pages/EventDetailsPage';
import HomePage from './pages/HomePage'
import {Route, Routes} from 'react-router-dom'
import UserPage from './pages/UserPage';
import UserDetails from './pages/UserDetailsPage';
import About from './pages/About';
import Calendar from './pages/Calendar';





function App() {



  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/:eventId" element={<EventDetails />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />

      </Routes>
      
      <Footer />
    </>
  )
}

export default App
