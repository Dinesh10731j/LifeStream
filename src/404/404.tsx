
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
    
      <motion.div
        className="flex-grow flex flex-col items-center justify-center text-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Go Back to Home
        </a>
      </motion.div>
      <Footer />
    </div>
  );
};

export default NotFound;
