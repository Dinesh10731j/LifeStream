
import donateBlood from "../../assets/donate_blood.jpg";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
   <>





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

<Footer/>

   </>
  )
}

export default Home