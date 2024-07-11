import React, { useState } from 'react';
import { LucideView, Calendar, User, Menu } from "lucide-react";
import { Link } from 'react-router-dom';
import { UseUserProfile } from '../hooks/Usegetprofile';

interface SidenavProps {
  userid: string; // Explicitly type the userid as a string
}

const Sidenav: React.FC<SidenavProps> = ({ userid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, isError, data } = UseUserProfile(userid);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
        className="md:hidden p-4 fixed top-0 left-0 z-40 px-3 py-7"
        onClick={toggleSidebar}
      >
        <Menu />
      </button>

      <aside 
        className={`h-screen bg-slate-200 w-72 py-16 z-30 px-7 fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 py-7`}
      >
        <nav>
          <img src={`https://avatar.iran.liara.run/username?username=${data?.name}`} className='h-20 w-20 mt-6 ml-7 '/>
          <h1 className='mt-7 px-4'>{`Hi,${data?.name}`}</h1> 
          <ul className="flex flex-col gap-12 mt-10">
            <li className="flex items-center gap-2">
              <Link to="/donor/viewdonationhistory" className="flex items-center gap-2">
                <LucideView />
                View Donation History
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/donor/schedulenewdonations" className="flex items-center gap-2">
                <Calendar />
                Schedule New Donations
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/donor/updatepersonalinformation" className="flex items-center gap-2">
                <User />
                Update Personal Information
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

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
