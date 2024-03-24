import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
NavLink

function Footer() {
  return (
    <footer className="bg-white  shadow dark:bg-gray-500 mt-20">
      <div className="w-full   p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          
          <a href="#" className="flex gap-1">
          
              <img src={Logo} alt="" className="w-10 h-10" />
              <span className="self-center text-2xl font-semibold text-gray-500 whitespace-nowrap dark:text-white">
                Social Slat
              </span>
         
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>

            <li>
              <a href="" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Social Slat
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
