import donateBlood from "../../assets/donate_blood.jpg";
import Footer from "../../Components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className=" py-7 px-4  md:py-12 md:px-80 ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="md:text-6xl text-4xl"
        >
          Welcome to Lifestream
        </motion.h1>

        <motion.h3 className="md:text-2xl text-xl py-4 px-2 text-justify text-wrap " initial={{opacity:0,y:300}}
        animate={{opacity:1,y:0}}
        transition={{type:'just',delay:0.3}}
        >
          {" "}
          Save Lives, Donate Blood Every drop counts
        </motion.h3>
        <motion.h1 className="text-justify text-md text-wrap md:text-2xl font-sans" initial={{y:-300,opacity:0}} animate={{y:0,opacity:1}}
        transition={{type:'spring',delay:0.5,stiffness:300}}
        >
          At Lifestream, we are dedicated to ensuring a safe and sufficient
          blood supply for those in need. Your blood donation can make a
          life-saving difference for patients undergoing surgeries, battling
          cancer, and facing unexpected emergencies.

          
        </motion.h1>
      </section>

      <section
        className="flex flex-col justify-center items-center py-2 px-2"
      
      >
        <motion.img
          src={donateBlood}
          alt="blood_image"
          className="h-[500px] w-[500px]"
          initial={{ opacity: 0, transitionBehavior: "revert", y:-50,}} animate={{opacity:1,y:0} }

          transition={{type:'spring',stiffness:300}}
        />
      </section>

      <Footer />
    </>
  );
};

export default Home;
