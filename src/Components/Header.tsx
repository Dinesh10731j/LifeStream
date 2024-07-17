import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import Codynn_Logo from "../assets/Codynn_Logo.png";
import { motion } from "framer-motion";

const Header = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  return (
    <>
      <section className="flex justify-around items-center py-3 px-2">
        <section>
          <motion.img
            src={Codynn_Logo}
            alt="codynn_logo"
            className="mt-4"
            initial={{ y: -80, opacity: 0 }}

            animate={{opacity:1,y:0}}

            transition={{type:'spring',stiffness:300,delay:0.4}}

            
          />
        </section>
        <section className="hidden md:flex flex-row py-4 px-4 mt-20 md:mt-0">
          <nav>
            <ul className="flex flex-col md:flex-row font-medium font-sans">
              <Link to="/">
                <motion.li className="md:mr-6"  whileHover={{ scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } }}>Home</motion.li>
              </Link>
              <Link to="/aboutus">
                <motion.li className="md:mr-6"  whileHover={{ scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } }}>About us</motion.li>
              </Link>
              <Link to="/mission">
                <motion.li className="md:mr-6"  whileHover={{ scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } }}>Mission</motion.li>
              </Link>
            </ul>
          </nav>
        </section>
        <section>
          <Link to="/login">
          <motion.button
      className="bg-[#D32F2F] text-medium md:py-3 px-4 py-2 md:px-7 rounded-md tracking-wide text-[#FFFF]"
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      Get Started
    </motion.button>
          </Link>
        </section>
        <section className="block md:hidden cursor-pointer">
          <MenuIcon onClick={() => setIsSidenavOpen(true)} />
        </section>
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
              <ul className="flex flex-col font-medium font-sans">
                <Link to="/" onClick={() => setIsSidenavOpen(false)}>
                  <motion.li
                    className="mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Home
                  </motion.li>
                </Link>
                <Link to="/aboutus" onClick={() => setIsSidenavOpen(false)}>
                  <motion.li
                    className="mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    About us
                  </motion.li>
                </Link>
                <Link to="/mission" onClick={() => setIsSidenavOpen(false)}>
                  <motion.li
                    className="mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Mission
                  </motion.li>
                </Link>
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
