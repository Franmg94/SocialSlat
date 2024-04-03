import EventMainInfo from "../components/EventMainInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5000";

function EventDetails() {
    const { eventId } = useParams();
    const [eventDetails, setEventDetails] = useState({});
  
    function getEvent() {
      axios
        .get(`${API_URL}/events/${eventId}`)
        .then((response) => {
          console.log('Event fetched');
          console.log(response.data);
          setEventDetails(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    useEffect(() => {
      getEvent();
    }, [eventId]);
  
   
    return (
        <>
        <EventMainInfo eventDetails={eventDetails}/>
        
        </>
    );
}

export default EventDetails;