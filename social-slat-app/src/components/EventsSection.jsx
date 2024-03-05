import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const API_URL = "http://localhost:5000";

function EventsSection() {
  const [events, setEvents] = useState([]);

  const getAllEvents = () => {
    axios
      .get(`${API_URL}/events`)
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden my-24 border border-solid border-red outline-current:black">
      <div className="container relative  px-5 py-24 mt-10 mx-auto">
        {/*  */}
        <h1 className="title-font sm:text-4xl text-3xl mb-4 fonr-medium text-gray-900">Events happening next</h1>

        {events.map((event) => {
          return (
            <div key={event.id} className="-my-8 divide-y-2 divide-gray-100">
              <div  className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    CATEGORY
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    {event.date}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    {event.title}
                  </h2>
                  <p className="leading-relaxed">
                    {event.description}
                  </p>
                  <Link to={`/events/${event.id}`} >
                    <a className="text-pink-500 inline-flex items-center mt-4">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </Link>
                 
                </div>
              </div>
              {/* Repeat the above structure for each article */}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default EventsSection;
