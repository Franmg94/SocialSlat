import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const API_URL = import.meta.env.VITE_API_URL;

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectUser, setSelectedUser] = useState(null);

  function getUsersData() {
    axios
      .get(`${API_URL}/users`)
      .then((response) => {
        console.log("Users Data Fetched");
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getUsersData();
  }, []);

  const handleUserClick = (userId) => {
    setSelectedUser((prevState) => (prevState === userId ? null : userId));
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/*USERS DETAILS */}
          {/* <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
            <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
              <div className=" h-32 overflow-hidden">
                <img
                  className="w-full"
                  src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  alt=""
                />
              </div>
              <div className="flex justify-center px-5  -mt-12">
                <img
                  className="h-32 w-32 bg-white p-2 rounded-full   "
                  src={users[0].image}
                  alt=""
                />
              </div>
              <div className="">
                <div className="text-center px-14">
                  <h2 className="text-gray-800 text-3xl font-bold">
                    {users[0].username}
                  </h2>
                  <a
                    className="text-gray-400 mt-2 hover:text-blue-500"
                    href="https://www.instagram.com/immohitdhiman/"
                    target="_blank"
                  >
                    {users[0].squad}
                  </a>
                  <p className="mt-2 text-gray-500 text-sm">{users[0].about}</p>
                </div>
                <hr className="mt-6" />
                <div className="flex  bg-gray-50 ">
                  <div className="text-center w-1/2 p-4 ">
                    <p>
                      <span className="font-semibold">Events Created </span>
                    </p>
                    <ul>
                      {users[0].events.created.map((event, i) => {
                        return (
                          <li key={i}>
                            <Link to={`/events/${event.eventId}`}>
                              <p className="hover:bg-gray-100 cursor-pointer">
                                {event.eventTitle}
                              </p>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="border"></div>
                  <div className="text-center w-1/2 p-4 ">
                    <p>
                      {" "}
                      <span className="font-semibold">Events Attending </span>
                    </p>
                    <ul>
                      {users[0].events.attending.map((event, i) => {
                        return (
                          <li key={i}>
                            <Link to={`/events/${event.eventId}`}>
                              <p className=" hover:bg-gray-100 cursor-pointer">
                                {event.eventTitle}
                              </p>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/*USERS LIST */}
          
          <div className="m-10 my-40 container">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl -mt-40 text-center mb-10"> Users </h1>
            <hr className="mb-6"/>
            <ul className=" divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user) => {
                return (
                  <li
                    className="pb-3 sm:pb-4 cursor-pointer"
                    onClick={() => handleUserClick(user)}
                    key={user.id}
                  >
                 {/*SELECTED USER */}
                    {selectUser === user ? (

                     <div className="   dark:bg-gray-800   flex flex-wrap items-center  justify-center p-5">
                      <div className="flex items-center gap-2 space-x-4 rtl:space-x-reverse bg-lime-100 rounded p-5 ">
                        <div className="flex-shrink-0">
                          <img
                            className="w-24 h-24 rounded-full"
                            src={user.image}
                            alt="Neil image"
                          />
                        </div>
                        <div className=" min-w-0">
                          <span className="text-lg font-medium text-gray-900 truncate dark:text-white">
                            {user.username}
                          </span>
                          <br />
                          <span className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {user.squad}
                          </span>
                        </div>
                        <p>{user.about}</p>
                        <hr />

                {/*EVENTS FROM USER */}
                        <div className="flex bg-gray-50">
                          <div className="text-center w-1/2 p-4">
                            <span className="font-semibold">
                              Events Created
                            </span>
                            <hr />
                            <ul>
                              {user.events.created.map((event, i) => {
                                return (
                                  <li key={i}>
                                    <Link to={`/events/${event.eventId}`}>
                                      <p className="hover:bg-gray-100 cursor-pointer">
                                        {event.eventTitle}{" "}
                                      </p>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                          <div className="border"></div>
                          <div className="text-center w-1/2 p-4">
                            <span className="font-semibold">Events Attending</span>
                            <hr />
                            <ul>
                                {user.events.attending.map((event, i) => {
                                    return (
                                        <li key={i}>
                                            <Link to={`/events/${event.eventId}`}>
                                                <p className="hover:bg-gray-100 cursor-pointer" >{event.eventTitle} </p>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>

                          </div>
                        </div>
                      </div>

                     </div>
                    ) : (
                      /*NON SELECTED USER */
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <img
                            className="w-16 h-16 rounded-full"
                            src={user.image}
                            alt="Neil image"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {user.username}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {user.squad}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* {selectUser === user && (
                        <div className="bg-gray-200 p-4">
                            <p>{user.about}</p>
                        </div>
                    )} */}
                  </li>
                );
              })}
            </ul>
          </div>
        </>

        /* USER DETAILS */
      )}
    </>
  );
}
