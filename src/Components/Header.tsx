import { useState } from "react";
import {NavLink} from "react-router-dom";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import Lifestream_Logo from "../assets/Codynn_Logo.png";
import { motion } from "framer-motion";

const Header = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  return (
    <>
      <section className="flex justify-around items-center py-3 px-2">
        <section>
          <motion.img
            src={Lifestream_Logo}
            alt="codynn_logo"
            initial={{ y: -80, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
          />
        </section>
        <section className="hidden md:flex flex-row py-4 px-4 mt-20 md:mt-0">
          <nav>
            <ul className="flex flex-col md:flex-row font-medium font-sans">
              <NavLink to="/" className={({isActive})=>isActive?'border-b-2 border-black':''}>
                <motion.li
                  className="md:mr-6"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Home
                </motion.li>
              </NavLink>
              <NavLink to="/aboutus" className={({isActive})=>isActive?'border-b-2 border-black':''}>
                <motion.li
                  className="md:mr-6"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  About us
                </motion.li>
              </NavLink>
              <NavLink to="/mission" className={({isActive})=>isActive?'border-b-2 border-black':''}>
                <motion.li
                  className="md:mr-6"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  Mission
                </motion.li>
              </NavLink>
            </ul>
          </nav>
        </section>
        <section>
          <NavLink to="/login" className={({isActive})=>isActive?'border-b-2 border-black':''}>
            <motion.button
              className="bg-[#D32F2F] text-medium md:py-3 px-4 py-2 md:px-7 rounded-md tracking-wide text-[#FFFF]"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get Started
            </motion.button>
          </NavLink>
        </section>

        <motion.section
          className="block md:hidden cursor-pointer"
          initial={{ opacity: 0, y: -80, rotateY: 0 }}
          animate={{ rotateX: 0, opacity: 1, y: 12 }}
          transition={{ type: "spring", delay: 0.2, stiffness: 300 }}
        >
          <MenuIcon onClick={() => setIsSidenavOpen(true)} />
        </motion.section>
      </section>

      {isSidenavOpen && (
        <motion.div
          className="inset-0 z-50 flex fixed"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="bg-white w-64 h-full shadow-lg p-5">
            <XIcon
              className="mb-4 cursor-pointer top-4"
              onClick={() => setIsSidenavOpen(false)}
            />
            <nav>
              <ul
                className="flex flex-col font-medium font-sans"
                
              >
                <NavLink to="/" className={({isActive})=>isActive?'border-b-2 border-black':''} onClick={() => setIsSidenavOpen(false)}>
                  <motion.li
                    className="mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
             
                  >
                    Home
                  </motion.li>
                </NavLink>
                <NavLink to="/aboutus" className={({isActive})=>isActive?'border-b-2 border-black':''} onClick={() => setIsSidenavOpen(false)}>
                  <motion.li
                    className="mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
            
                  >
                    About us
                  </motion.li>
                </NavLink>
                <NavLink to="/mission" className={({isActive})=>isActive?'border-b-2 border-black':''} onClick={() => setIsSidenavOpen(false)}>
                  <motion.li
                    className="mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
             
                  >
                    Mission
                  </motion.li>
                </NavLink>
              </ul>
            </nav>
          </div>
          <div className="flex-1" onClick={() => setIsSidenavOpen(false)} />
        </motion.div>
      )}
    </>
  );
};

export default Header;
