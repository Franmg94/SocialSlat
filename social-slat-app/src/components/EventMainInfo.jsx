import { Link } from "react-router-dom";


export default function EventMainInfo({ eventDetails }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto flex flex-wrap bg-slate-100">
        <div className="w-1/4 h-1/2 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={eventDetails.image}
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 lg:pl-10 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {eventDetails.title}
          </h1>
          {/* <Link to={`/users`}>
          <p className="mb-4 leading-relaxed font-light">By {eventDetails.creator.creatorName}</p>
          </Link> */}
          <p className="mb-8 leading-relaxed">{eventDetails.description}</p>
          <hr className="border-t border-gray-300 my-4 w-1/5" />

          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="mb-2">
                On <span className="font-medium">{eventDetails.date}</span> at{' '}
                <span className="font-medium">{eventDetails.time}</span>
              </p>
              <p className="mb-2">
                Location: <span className="font-medium">{eventDetails.location}</span>
              </p>
              <p>
                Participants:{' '}
                {!eventDetails.participants ? (
                  <span>Loading...</span>
                ) : (
                  eventDetails.participants.map((participant, index) => (
                    <span key={index} className="font-light">
                      {participant}{index !== eventDetails.participants.length - 1 && ', '}
                    </span>
                  ))
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
}
