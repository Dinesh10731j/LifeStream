import React, { useState } from 'react';
import {UserSearchIcon,HandHeartIcon,HistoryIcon ,Menu} from "lucide-react";
import { Link} from 'react-router-dom';
import { UseUserProfile } from '../hooks/Usegetprofile';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {recipientNavLinks} from '../NavLink/route';
import { CircularProgress,Typography } from '@mui/material';


interface SidenavProps {
  userid: string; // Explicitly type the userid as a string
}

const ReceipentSidenav: React.FC<SidenavProps> = ({ userid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoading, data } = UseUserProfile(userid);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };




  const handleLogout =()=>{
    Cookies.remove("token");
    Cookies.remove("role");
    Cookies.remove("userid");
    Cookies.remove("email");
   navigate("/login");
  }


  return (
    <>
      {/* Toggle button for mobile */}
      <button 
        className=" p-4 fixed top-0 left-0 z-40 px-3 py-7 md:hidden"
        onClick={toggleSidebar}
      >
        <Menu />
      </button>
    
<div className='flex'>
  
<aside 
        className={`h-screen bg-slate-200 w-68 md:w-64 py-16 z-30 px-2 md:${isOpen ? '-translate-x-full' : 'translate-x-0'} fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 py-7`}
      >
        <nav>
          <img src={`https://avatar.iran.liara.run/username?username=${data?.name}`} className='h-20 w-20 mt-6 ml-7 '/>
         
          <h1 className='mt-7  px-4 font-sans font-medium text-xl  py-0'>{isLoading ? (
        <CircularProgress sx={{ml:7}} size={25} />
      ) : !data?.name ? (
        <Typography
          variant="h6"
          sx={{ fontWeight: 'medium', color: 'red' }}
        >
          Name not found
        </Typography>
      ) : (
        <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
          {`Hi,${data.name}`}
        </Typography>
      )}</h1> 
          <ul className="flex flex-col gap-12 mt-10">
            <li className="flex items-center gap-2">
              <Link to="/search-donor" className="flex items-center gap-2">
                <UserSearchIcon/>
              {recipientNavLinks.searchdonation}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/blood-request" className="flex items-center gap-2">
                <HandHeartIcon/>
                {recipientNavLinks.requestblood}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/request-history" className="flex items-center gap-2">
                <HistoryIcon/>
                {recipientNavLinks.viewrequesthistory}
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout} className='py-2 px-7 mt-4 ml-7  rounded-md bg-[#E63946] text-[#FFFFFF]'>Logout</button>
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

export default ReceipentSidenav;











