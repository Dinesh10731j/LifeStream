import { TwitterIcon, Facebook, InstagramIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A]/[0.1] w-full py-8 px-4 flex flex-col md:flex-row justify-around items-center text-center md:text-left">
      <section className="mb-6 md:mb-0">
        <h1 className="text-2xl md:text-7xl">A platform to save life</h1>
      </section>
      
      <section className="mb-6 md:mb-0">
        <h1>London</h1>
        <address>London 32, street</address>
      </section>
      
      <section className="mb-6 md:mb-0">
        <h1>Follow us on</h1>
        <div className="flex justify-center md:justify-start gap-4 mt-2">
          <Facebook />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </section>
      
      <section>
        <h1>Contact Us</h1>
        <h1>Email: lorem@gmail.com</h1>
        <h1>Phone: 9877667788</h1>
      </section>
    </footer>
  );
}

export default Footer;
