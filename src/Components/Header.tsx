
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import Codynn_Logo from "../assets/Codynn_Logo.png";

const Header = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  return (
    <>
      <section className="flex justify-around items-center py-3 px-2">
        <section>
          <img src={Codynn_Logo} alt="codynn_logo" className="mt-4" />
        </section>
        <section className="hidden md:flex flex-row py-4 px-4 mt-20 md:mt-0">
          <nav>
            <ul className="flex flex-col md:flex-row font-medium font-sans">
              <Link to="/">
                <li className="md:mr-6">Home</li>
              </Link>
              <Link to="/aboutus">
                <li className="md:mr-6">About us</li>
              </Link>
              <Link to="/mission">
                <li className="md:mr-6">Mission</li>
              </Link>
            </ul>
          </nav>
        </section>
        <section>
          <Link to="/login">
            <button className="bg-[#D32F2F] text-medium md:py-3 px-4 py-2 md:px-7 rounded-md tracking-wide">
              Get Started
            </button>
          </Link>
        </section>
        <section className="block md:hidden cursor-pointer">
          <MenuIcon onClick={() => setIsSidenavOpen(true)} />
        </section>
      </section>

      {isSidenavOpen && (
        <div className="inset-0 z-50 flex fixed">
          <div className="bg-white w-64 h-full shadow-lg p-5">
            <XIcon
              className="mb-4 cursor-pointer  top-4 "
              onClick={() => setIsSidenavOpen(false)}
            />
            <nav>
              <ul className="flex flex-col font-medium font-sans">
                <Link to="/" onClick={() => setIsSidenavOpen(false)}>
                  <li className="mb-4">Home</li>
                </Link>
                <Link to="/aboutus" onClick={() => setIsSidenavOpen(false)}>
                  <li className="mb-4">About us</li>
                </Link>
                <Link to="/mission" onClick={() => setIsSidenavOpen(false)}>
                  <li className="mb-4">Mission</li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="flex-1" onClick={() => setIsSidenavOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Header;

