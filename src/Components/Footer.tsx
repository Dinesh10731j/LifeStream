
import {TwitterIcon,Facebook,InstagramIcon} from "lucide-react"
const Footer = () => {
  return (
   <>
   
   <footer className="bg-[#1A1A1A]/[0.1] w-full h-56 flex justify-evenly py-4 px-2" >
   <section><h1 className="text-4xl">A platform  to save life</h1></section>
   <section>

    <h1>London</h1>
    <address>London 32 ,street</address>
   </section>

   <section className="flex gap-10">
    <h1>Follow us on</h1>
    <Facebook/>
    <TwitterIcon/>
    <InstagramIcon/>
   </section>

   </footer>
   </>
  )
}

export default Footer