import React, { useState } from 'react';
import {Menu,HandHeartIcon,StoreIcon,UsersIcon} from "lucide-react";
import { Link} from 'react-router-dom';
import { UseUserProfile } from '../hooks/Usegetprofile';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {adminNavLinks} from '../NavLink/route';
import { CircularProgress } from '@mui/material';
import {motion} from "framer-motion";
import { UseRemoveAccount } from '../hooks/Useremoveaccount';
import {ToastContainer} from "react-toastify"
interface SidenavProps {
  userid: string; // Explicitly type the userid as a string
}

const AdminSidenav: React.FC<SidenavProps> = ({ userid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {data,isLoading } = UseUserProfile(userid);
  const accountMutation = UseRemoveAccount();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };




  const handleLogout =()=>{
    Cookies.remove("token");
    Cookies.remove("role");
    Cookies.remove("userid");
    Cookies.remove("email");
    Cookies.remove('id')
   navigate("/login");
  }



  const handleRemoveAccount = ()=>{
    const userId = Cookies.get("userid");
   if (userId) {
     accountMutation.mutate(userId);
   } else {
     throw new Error("User ID is undefined");
   }
  }

  return (
    <>
      {/* Toggle button for mobile */}
      <motion.button 
        className=" p-4 fixed top-0 left-0 z-40 px-3 py-7 md:hidden"
        onClick={toggleSidebar}
        initial={{opacity:0,y:-30}}
        animate={{opacity:1,y:0}}
        transition={{type:"spring",stiffness:300}}
      >
        <Menu />
      </motion.button>
    
<div className='flex'>
  
<aside 

        className={`h-screen bg-slate-200 w-68 md:w-64 py-16 z-30 px-2 md:${isOpen ? '-translate-x-full' : 'translate-x-0'} fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 py-7`}
      >
        <nav>

        {
            data && data?.name?(<img src={`https://avatar.iran.liara.run/username?username=${data?.name}`} 
              className='h-20 w-20 mt-6 ml-7 '/>):(
              <img src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk"   className='h-20 w-20 mt-6 ml-7 rounded-full '/>

            )

          }
        
       
          <h1 className='mt-7 px-4 font-sans font-medium text-xl'>{
        isLoading?(<CircularProgress size={20} color='primary' sx={{ml:7}}/>):(
          <p>{`Hi,${data?.name}`}</p>
        )
        
        }</h1> 
          <ul className="flex flex-col gap-12 mt-10">
            <li className="flex items-center gap-2">
              <Link to="/receiptant-request" className="flex items-center gap-2">
                <HandHeartIcon />
              {adminNavLinks.approvedecline}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/manage-blood-inventory" className="flex items-center gap-2">
                <StoreIcon/>
                {adminNavLinks.inventory}
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link to="/manage-receiptant" className="flex items-center gap-2">
                <UsersIcon/>
                {adminNavLinks.manageuser}
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout} className='py-2 px-7 mt-4 ml-7  rounded-md bg-[tomato] text-[#FFFFFF]'>Logout</button>
        <button className='text-red-700 text-center px-7 py-4 flex flex-col' onClick={handleRemoveAccount}>
          
          {
            accountMutation.isPending?(
              <CircularProgress size={20} sx={{ml:7,mt:2}} color='primary'/>
            ):
            (
              "Remove Account"
            )
          }
         </button>
      </aside>

      <ToastContainer
      position='top-center'
      theme='light'
      />

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

export default AdminSidenav;











