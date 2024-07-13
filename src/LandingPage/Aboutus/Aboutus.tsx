import Footer from "../../Components/Footer"

import { ourTeam } from "../../utils/placeholder"
const Aboutus = () => {
  return (
<>

<section className="py-4 px-3 md:py-10 md:px-60">
<h1 className="py-2 px-3 text-4xl md:text-6xl">Who We Are</h1>
<p className="md:text-2xl font-sans ">

At Lifestream, we are a dedicated team of healthcare professionals, volunteers, and community members committed to saving lives through blood donation. Our organization was founded
 in 2021 with a mission to ensure a safe and sufficient blood supply for those in need.

</p>
</section>


<section className="py-4 px-3 md:py-10 md:px-60">

<h1 className="py-2 px-3  text-4xl  md:text-6xl">Why Blood Donation Matters</h1>
<p className="md:text-2xl font-sans ">Every two seconds, someone in Nepal needs blood. Blood donations are essential for surgeries, cancer treatments, 
chronic illnesses, and traumatic injuries. Your single donation can save up to three lives and make a profound impact
 on patients and their families.</p>
</section>

<section className="flex items-center justify-center px-2 py-4" >
<h1 className="md:text-6xl font-sans text-4xl ">Our Team</h1>
</section>



<section className="flex  flex-wrap justify-center items-center gap-10">


{

  ourTeam?.map((teams,index)=>(

    <div key={index} className="bg-[#1A1A1A]/[0.1] py-3 px-4 rounded-md hover:shadow-lg transition-all ">
      <img src={teams.image} className="h-[300px] w-[300px] md:h-[200px] md:w-[200px]"/>
<h1 className="text-2xl font-sans font-medium" >{teams.name}</h1>
<h3>{teams.team}</h3>
<h5>{teams.role}</h5>
    </div>
  ))
}
</section>
<Footer/>
</>
  )
}

export default Aboutus