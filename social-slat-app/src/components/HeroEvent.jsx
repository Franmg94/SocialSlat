import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function HeroEvent() {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({});

  function getEvent() {
    axios
      .get(`${API_URL}/events/${eventId}`)
      .then((response) => {
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
    <section className="text-gray-600 body-font">
      {/* Container Info */}
      <div className="container border border-solid border-black outline-current:black flex px-5 py-16 items-start ">
        {/* Main Info */}
        <div className=" lg:w-2/3 flex-1 ">
          <h1 className="title-font sm:text-4xl text-3xl mb-1 font-medium text-gray-900">
            {eventDetails.title}
          </h1>{" "}
          <span className="mb leading-relaxed font-light ">
            By {eventDetails.creator}
          </span>
          <p className="mt-3 mb-8 leading-relaxed">
            {eventDetails.description}
          </p>
          <hr className="border-t border-gray-300 my-4 h-1 w-full " />

          {/* Details Info */}
          <div className="flex justify-start items-start flex-col">
            <p>
              On <span className="font-medium">{eventDetails.date}</span> at{" "}
              <span className="font-medium">{eventDetails.time}</span>
            </p>
            <br />
            <p className="mb-5">
              Location:{" "}
              <span className="font-medium">{eventDetails.location}</span>
            </p>
            <p>
              Participants:{" "}
              {eventDetails.participants.map((participant) => (
                <span key={participant} className="font-light">
                  {participant}{" "}
                </span>
              ))}
            </p>
          </div>
        </div>
        {/* Image */}
        <img
          src={eventDetails.image}
          alt=""
          className="max-w-96 box-border rounded-lg"
        />
      </div>
      <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
        Button
      </button>
    </section>
  );
}

export default HeroEvent;
