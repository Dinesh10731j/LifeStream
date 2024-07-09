import Codynn_Logo from "../../assets/Codynn_Logo.png";
import donateBlood from "../../assets/donate_blood.jpg";
const Home = () => {
  return (
   <>


   <section className="flex justify-around items-center py-3 px-2">

    <section>
      <img src={Codynn_Logo} alt="codynn_logo" className="mt-4"/>
    </section>
    <section>
    <nav>

    <ul className="flex flex-col md:flex-row font-medium font-sans">
  <li className="md:mr-6">Home</li>
  <li className="md:mr-6">About us</li>
  <li className="md:mr-6">Mission</li>
</ul>

</nav>

    </section>


    <section>
        <button className="bg-[#D32F2F] text-medium py-3 px-7 rounded-md tracking-wide ">Get Started</button>
    </section>


   </section>


<section className=" py-7 px-4  md:py-12 md:px-80 ">

    <h1 className="md:text-xl text-justify text-md text-wrap">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eum, quasi culpa dolorum provident, fugit iste 
        tempore obcaecati dolore, consequatur quisquam perspiciatis minima distinctio ex aut quaerat eos ducimus cumque?
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eum, quasi culpa dolorum provident, fugit iste 
        tempore obcaecati dolore, consequatur quisquam perspiciatis minima distinctio ex aut quaerat eos ducimus cumque?
        </h1>
</section>


<section className="flex flex-col justify-center items-center py-2 px-2">
<img src={donateBlood} alt="blood_image" className='h-[500px] w-[500px]'/>

</section>

   </>
  )
}

export default Home