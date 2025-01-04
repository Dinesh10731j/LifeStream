import {motion} from "framer-motion"
import SuccessImage from "../../assets/missiongroup.avif";
import Chat from "../../Components/Chat";
const Mission = () => {
  return (
    <>
      <section className="py-3 px-6 md:py-7 md:px-60">
        <motion.h1 className="md:text-6xl text-4xl font-sans font-medium py-2 px-3"
         initial={{ y: -80, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ y: 0, stiffness: 300, type: "spring" }}
        >Our Mission</motion.h1>
        <motion.p className="md:text-2xl font-sans " initial={{y:-90,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4,stype:'spring',stiffness:300}}>
          Our Mission is to inspire, promote, and facilitate blood
          donation in Nepal. We aim to educate the public
          about the critical need for blood donors and to create a reliable and
          accessible blood donation network.
        </motion.p>
      </section>

<section className="flex justify-center items-center">

<motion.img src={SuccessImage} alt="mission_image"  initial={{ y: -80, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ y: 0, stiffness: 300, type: "spring" }}/>

</section>

<Chat/>

    </>
  );
};

export default Mission;
