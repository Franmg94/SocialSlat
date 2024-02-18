
import { useEffect, useState } from "react";
import EventsSection from "../components/EventsSection";
import Hero from "../components/Hero";
import axios from "axios";

const API_URL = "http://localhost:5000";


function HomePage() {
    const [events, setEvents] = useState([]);

    const getAllEvents = () => {
        axios   
          .get(`${API_URL}/events`)
          .then((response) => {
            console.log(response.data)
            setEvents(response.data) })
          .catch((error) => console.log(error));
    }

    useEffect(() => {
        getAllEvents();
    }, []);

    return(
        <> 
            <Hero />
            <EventsSection />
            <p>{events[0].title}</p>
        
        </>
    );
}

export default HomePage;