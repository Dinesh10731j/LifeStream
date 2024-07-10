
import SuccessImage from "../../assets/missiongroup.avif";
const Mission = () => {
  return (
    <>
      <section className="py-3 px-6 md:py-7 md:px-60">
        <h1 className="md:text-6xl text-4xl font-sans font-medium py-2 px-3">Our Mission</h1>
        <p className="md:text-2xl font-sans ">
          Our Mission is to inspire, promote, and facilitate blood
          donation in Nepal. We aim to educate the public
          about the critical need for blood donors and to create a reliable and
          accessible blood donation network.
        </p>
      </section>

<section className="flex justify-center items-center">

<img src={SuccessImage} alt="mission_image"/>

</section>

    </>
  );
};

export default Mission;
