import Footer from "../../Components/Footer";
import { motion } from "framer-motion";
import { ourTeam } from "../../utils/placeholder";
const Aboutus = () => {
  return (
    <>
      <section className="py-4 px-3 md:py-10 md:px-60">
        <motion.h1
          className="py-2 px-3 text-4xl md:text-6xl"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: 0, stiffness: 300, type: "spring" }}
        >
          Who We Are
        </motion.h1>
        <motion.p className="md:text-2xl font-sans " initial={{y:-90,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4,stype:'spring',stiffness:300}}>
          At Lifestream, we are a dedicated team of healthcare professionals,
          volunteers, and community members committed to saving lives through
          blood donation. Our organization was founded in 2021 with a mission to
          ensure a safe and sufficient blood supply for those in need.
        </motion.p>
      </section>

      <section className="py-4 px-3 md:py-10 md:px-60">
        <motion.h1 className="py-2 px-3  text-4xl  md:text-6xl" initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: 0, stiffness: 300, type: "spring" }}>
          Why Blood Donation Matters
        </motion.h1>
        <motion.p className="md:text-2xl font-sans " initial={{y:-90,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4,stype:'spring',stiffness:300}}>
          Every two seconds, someone in Nepal needs blood. Blood donations are
          essential for surgeries, cancer treatments, chronic illnesses, and
          traumatic injuries. Your single donation can save up to three lives
          and make a profound impact on patients and their families.
        </motion.p>
      </section>

      <section className="flex items-center justify-center px-2 py-4">
        <motion.h1 className="md:text-6xl font-sans text-4xl "
         initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ y: 0, stiffness: 300, type: "spring" }}>Our Team</motion.h1>
      </section>

      <section className="flex  flex-wrap justify-center items-center gap-10">
        {ourTeam?.map((teams, index) => (
          <motion.div
            key={index}
            className="bg-[#1A1A1A]/[0.1] py-3 px-4 rounded-md hover:shadow-lg transition-all "
            initial={{y:-90,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4,stype:'spring',stiffness:300}}
          >
            <img
              src={teams.image}
              className="h-[300px] w-[300px] md:h-[200px] md:w-[200px]"
            />
            <h1 className="text-2xl font-sans font-medium">{teams.name}</h1>
            <h3>{teams.team}</h3>
            <h5>{teams.role}</h5>
          </motion.div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default Aboutus;
