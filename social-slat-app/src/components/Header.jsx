import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg"

function Header() {
  return (
    <header className="text-gray-600 body-font bg-white sticky top-0 z-20 w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"> 
      <img src={Logo} alt="" className="w-10 h-10"/>
        
        <NavLink to="/">
          <span className="ml-3 text-xl">Social Slat</span>
        </NavLink>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base">
          <NavLink to="#eventsSection" className="mr-5 hover:text-gray-900">
            Events
          </NavLink>
          <NavLink to="/users" className="mr-5 hover:text-gray-900">
            Users
          </NavLink>
          <NavLink to="/calendar" className="mr-5 hover:text-gray-900">
            Calendar
          </NavLink>
          <NavLink to="/about" className="mr-5 hover:text-gray-900">
            About
          </NavLink>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign In
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
