import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const API_URL = import.meta.env.VITE_API_URL;

export default function UserDetails() {
    const {userId} = useParams();
    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(true);

    function getUserDetails() {
console.log(`${API_URL}/users/${userId}`)

        axios
          .get(`${API_URL}/users/${userId}`)
          .then((response) => {
            console.log('User Details Fetched');
            console.log(response.data);
            setUserDetails(response.data);
          })
          .catch((error) => {
            console.error('Error fetching user details:', error);
          })
          .finally(() => {
            setLoading(false);
          });
    }

    useEffect(() => {
        getUserDetails();
    },[userId])

    return (
        <>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <>
           
<div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
    <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
        <div className=" h-32 overflow-hidden" >
            <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
        </div>
        <div className="flex justify-center px-5  -mt-12">
            <img className="h-32 w-32 bg-white p-2 rounded-full   " src={userDetails.image} alt="" />
        </div>
        <div className="">
            <div className="text-center px-14">
                <h2 className="text-gray-800 text-3xl font-bold">{userDetails.username}</h2>
                <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="_blank">{userDetails.squad}</a>
                <p className="mt-2 text-gray-500 text-sm">{userDetails.about}</p>
            </div>
            <hr className="mt-6" />
            <div className="flex  bg-gray-50 ">
                <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                    <p><span className="font-semibold">Events Created </span></p>
                    <ul>
                        {userDetails.events.created.map((event, i) => {
                            return (
                                <li key={i}>
                                    <p>{event}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="border"></div>
                <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                    <p> <span className="font-semibold">Events Attending </span></p>
                    <ul>
                        {userDetails.events.attending.map((event, i) => {
                            return (
                                <li key={i}>
                                    <p>{event}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

            </>
        )}
        </>
    );
}