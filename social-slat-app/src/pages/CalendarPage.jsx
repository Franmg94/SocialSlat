import { useEffect, useState } from "react";
import CalendarComponent from "../components/CalendarComponent"
import axios from "axios";


const API_URL = "http://localhost:5000";

export default function CalendarPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = () => {
    axios
      .get(`${API_URL}/events`)
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((error) => console.log(error));
  };
  

  return(
    <>
    <CalendarComponent events={events}/>
    </>
  )
}
