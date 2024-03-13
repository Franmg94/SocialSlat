import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const API_URL = import.meta.env.VITE_API_URL;

export default function UserPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    function getUsersData() {
        axios
          .get(`${API_URL}/users`)
          .then((response) => {
            console.log('Users Data Fetched');
            console.log(response.data);
            setUsers(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false)
          })
    }

    useEffect(() => {
        getUsersData();
    },[]);

    return(
        <>
        {loading ? (
            <p>Loading...</p>
        ) : (
            /*USERS LIST */
            <div>
                <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                    {users.map((user) => {
                        return(
                            
                        <li className="pb-3 sm:pb-4" key={user.id}>
                            <Link to={`/users/${user.id}`}>
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div className="flex-shrink-0">
                                    <img className="w-16 h-16 rounded-full" src={user.image} alt="Neil image" />
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

                            </Link>
                            
                        </li>
                        )
                    } )}
                </ul>
            </div>
        )}
    </>
    );
}