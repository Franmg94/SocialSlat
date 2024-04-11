import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SortButton from "./SortButton";

const API_URL = "http://localhost:5000";

function EventsSection() {
  const [events, setEvents] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [query, setQuery] = useState("");

  {
    /* REQUEST API */
  }
  const getAllEvents = () => {
    axios
      .get(`${API_URL}/events`)
      .then((response) => {
        console.log(response.data);
        setEvents(response.data);
      })
      .catch((error) => console.log(error));
  };

  const toggelSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  {
    /* SORT BY DATE  */
  }
  const sortByDate = () => {
    toggelSortOrder();
    setSortBy("date");
    const sortedByDate = [...events].sort((a, b) => {
      return sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    });
    setEvents(sortedByDate);
  };

  {
    /* SORT BY CATEGORY  */
  }
  const sortByCategory = () => {
    toggelSortOrder();
    setSortBy("name");
    const sortedByCategory = [...events].sort((a, b) => {
      const nameA = a.category.toLowerCase();
      const nameB = b.category.toLowerCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setEvents(sortedByCategory);
  };

  {
    /* FILTER BY TITLE  */
  }
  const filteredEvents = events.filter((event) => {
    return event.title && event.title.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <section id="eventsSection" className=""  >

      {/* FILTERS  SECTION */}
      <div className="bg-slate-100 p-10 text-center">

      <h1  className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl p-5">
        Events happening next
      </h1>

      {/* FILTERS */}

      <div className="flex justify-between">
        <SortButton sortValue={sortByCategory} text="Sort By Category" />
        <SortButton sortValue={sortByDate} text="Sort By Date" />
        <label>
          Search:
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
          />
        </label>
      </div>
      </div>
     

      

      {/* EVENTS */}

      <div className="flex flex-wrap justify-center items-start gap-6" >
        {filteredEvents.map((event) => {
          return (
            <div
              key={event.id}
              className="-my-8 divide-y-2 divide-gray-100 container relative  px-5 0 mt-10  text-gray-600 body-font overflow-hidden bg-gradient-to-r from-white via-purple-00 to-white p-8 rounded-md max-w-lg "
            >
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-slate-600 uppercase">
                    {event.category}
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">
                    {event.date}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-2xl">
                    {event.title}
                  </h2>
                  <p className="leading-relaxed mt-5">{event.description}</p>
                 
                </div>
                
              </div>
               <Link to={`/events/${event.id}`}>
                    <a className="text-pink-500 hover:bg-pink-300 rounded hover:px-2 hover:text-white inline-flex items-center mt-4">
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
          );
        })}
      </div>
     
    </section>
  );
}

export default EventsSection;
