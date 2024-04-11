import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5000";

export default function EditEvent() {
  const { eventId } = useParams();

  const [copyEvent, setCopyEvent] = useState({});

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const [isEnabled, setIsEnabled] = useState(false);

  function getEvent() {
    axios
      .get(`${API_URL}/events/${eventId}`)
      .then((response) => {
        console.log("Event fetched from EditEvent", response.data);

        setCopyEvent(response.data);

        setTitle(response.data.title);
        setDescription(response.data.description);
        setTime(response.data.time);
        setDate(response.data.date);
        setLocation(response.data.location);
        setImage(response.data.image);
        setCategory(response.data.category);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getEvent();
  }, [eventId]);

  function refreshPage() {
    window.location.reload(false);
  }

  const toggleButton = () => {
    setIsEnabled((prevEnabled) => !prevEnabled)
  }

  console.log("Copy event: ", copyEvent);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      title,
      description,
      date,
      time,
      location,
      image,
      creator: copyEvent.creator,
      comments: copyEvent.comments,
      category,
      participants: copyEvent.participants,
      squad: copyEvent.squad,
    };

    console.log("Req Body", requestBody);

    axios
      .put(`${API_URL}/events/${eventId}`, requestBody)
      .then((response) => {
        console.log("Success updating event");
        console.log("Data updated: ", response.data);
        refreshPage();
      })
      .catch((error) => {
        console.log("Error updating project...");
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Edit Event{" "}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Update the information of your event.
          </p>
        </div>
        <form
          onSubmit={handleFormSubmit}
          method="PUT"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* TITLE */}
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Title of the event
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  placeholder={title}
                  required={false}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            {/* Description */}
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-semibold leading-6 text-green-600"
              >
                Description
              </label>
              <div className="mt-2.5">
                <textarea
                  name="description"
                  id="description"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder={description}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* TIME AND LOCATION */}
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Time
              </label>
              <div className="mt-2.5">
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  placeholder={time}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Location
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="location"
                  id="location"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  placeholder={location}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            {/* DATE */}
            <div className="sm:col-span-2">
              <label
                htmlFor="date"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Date of the event
              </label>
              <div className="mt-2.5">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm  ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  required={false}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>

            {/* IMAGE */}
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block text-sm font-semibold leading-6 text-red-600"
              >
                Image URL
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  placeholder={image}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>

            {/* CATEGORY */}
            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block text-sm font-semibold leading-6 text-green-600"
              >
                Category
              </label>
              <div className="relative mt-2.5">
                <div className="inline-block relative w-full">
                  <select
                    id="category"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm  ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option value="Celebration">Celebration</option>
                    <option value="Education">Education</option>
                    <option value="Health & Wellness">Health & Wellness</option>
                    <option value="Arts & Culture">Arts & Culture</option>
                    <option value="Literature">Literature</option>
                    <option value="Hang Out">Hang Out</option>
                  </select>
                </div>
              </div>
            </div>


            {/* TOGGLE BUTTON */}
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                {/* Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" */}
                <button
                  type="button"
                  className={`flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    isEnabled ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                  role="switch"
                  onClick={toggleButton}
                  aria-checked={isEnabled}
                  aria-labelledby="switch-1-label"
                >
                  <span className="sr-only">Agree to policies</span>
                  {/* Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" */}
                  <span
                    aria-hidden="true"
                    className={`h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${
                      isEnabled ? 'translate-x-3.5' : 'translate-x-0'
                    }`}
                  ></span>
                </button>
              </div>
              <label
                className="text-sm leading-6 text-gray-600"
                id="switch-1-label"
              >
                By selecting this free palestine
                <a href="#" className="font-semibold text-red-600">
                  {" "}
                  privacy&nbsp;policy
                </a>
                .
              </label>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update information
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
