
import Codynn_Logo from "../assets/Codynn_Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    
    <section className="flex justify-around items-center py-3 px-2">

<section>
  <img src={Codynn_Logo} alt="codynn_logo" className="mt-4"/>
</section>
<section>
<nav>

<ul className="flex flex-col md:flex-row font-medium font-sans">
<Link to="/"><li className="md:mr-6">Home</li></Link>
<Link to="/aboutus"><li className="md:mr-6">About us</li></Link>
<Link to="/mission"><li className="md:mr-6">Mission</li></Link>

</ul>

</nav>

</section>


<section>
   <Link to="/login"><button className="bg-[#D32F2F] text-medium md:py-3 px-4 py-2 md:px-7 rounded-md tracking-wide  ">Get Started</button></Link> 
</section>


</section>
    </>
  )
}

export default Header