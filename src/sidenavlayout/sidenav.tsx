import React, { useState } from 'react';
import { LucideView, Calendar, User, Menu,ChevronLeft,Tally1 } from "lucide-react";
import { Link} from 'react-router-dom';
import { UseUserProfile } from '../hooks/Usegetprofile';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { donorNavLinks } from '../NavLink/route';

interface SidenavProps {
  userid: string; // Explicitly type the userid as a string
}

const Sidenav: React.FC<SidenavProps> = ({ userid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoading, isError, data } = UseUserProfile(userid);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };




  const handleLogout =()=>{
    Cookies.remove("token");
    Cookies.remove("role");
   navigate("/login");
  }

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    return <div>Error while fetching data</div>;
  }

  return (
    <>
      {/* Toggle button for mobile */}
      <button 
        className=" p-4 fixed top-0 left-0 z-40 px-3 py-7 hidden"
        onClick={toggleSidebar}
      >
        <Menu />
      </button>
    
<div className='flex'>
  
<aside 
        className={`h-screen bg-slate-200 w-68 md:w-72 py-16 z-30 px-7 md:${isOpen ? '-translate-x-full' : 'translate-x-0'} fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 py-7`}
      >
        <nav>
          <img src={`https://avatar.iran.liara.run/username?username=${data?.name}`} className='h-20 w-20 mt-6 ml-7 '/>
          <button onClick={handleLogout} className='py-2 px-7 mt-4  rounded-md bg-[tomato]'>Logout</button>
          <h1 className='mt-7 px-4'>{`Hi,${data?.name}`}</h1> 
          <ul className="flex flex-col gap-12 mt-10">
            <li className="flex items-center gap-2">
              <Link to="/donor/viewdonationhistory" className="flex items-center gap-2">
                <LucideView />
              {donorNavLinks.viewhistory}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/donor/schedulenewdonations" className="flex items-center gap-2">
                <Calendar />
                {donorNavLinks.schedule}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/donor/updatepersonalinformation" className="flex items-center gap-2">
                <User />
                {donorNavLinks.uodateinfo}
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      

</div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Sidenav;











