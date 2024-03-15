import './App.css'
import Footer from './components/Footer';
import Header from "./components/Header";
import EventDetails from './pages/EventDetailsPage';
import HomePage from './pages/HomePage'
import {Route, Routes} from 'react-router-dom'
import UserPage from './pages/UserPage';
import UserDetails from './pages/UserDetailsPage';
import About from './pages/About';
import CalendarPage from './pages/CalendarPage';






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
        <Route path="/calendar" element={<CalendarPage />} />

      </Routes>
      
      <Footer />
    </>
  )
}

export default App
