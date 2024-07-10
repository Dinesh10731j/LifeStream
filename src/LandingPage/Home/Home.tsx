import donateBlood from "../../assets/donate_blood.jpg";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <section className=" py-7 px-4  md:py-12 md:px-80 ">
        <h1 className="md:text-6xl text-4xl">Welcome to Lifestream</h1>

<h3 className="md:text-2xl text-xl py-4 px-2 "> Save Lives, Donate Blood Every drop counts</h3>
        <h1 className="text-justify text-md text-wrap md:text-2xl font-sans">
          At Lifestream, we are dedicated to ensuring a safe and sufficient blood supply
          for those in need. Your blood donation can make a life-saving
          difference for patients undergoing surgeries, battling cancer, and
          facing unexpected emergencies.
        </h1>
      </section>

      <section className="flex flex-col justify-center items-center py-2 px-2">
        <img
          src={donateBlood}
          alt="blood_image"
          className="h-[500px] w-[500px]"
        />
      </section>

      <Footer />
    </>
  );
};

export default Home;
