import { FaFacebookF } from "react-icons/fa";

export function Footer(){
   const year = new Date().getFullYear();
    return(
        <footer className="bg-black px-10 py-5 block inset-shadow-sm md:flex md:justify-between">
            <ul className="text-white">
                <li className="text-2xl">MovieFlix</li>
                <li> &copy; {year} All rights Reserved</li>
            </ul>
            <div>
               <ul className="flex text-white gap-5 mb-2">
                 <li className="text-white">Privacy</li>
                 <li>Terms of Service</li>
                 <li>Support</li>
               </ul>
               <ul className="flex gap-10">
                  <FaFacebookF className="text-white text-xl" />
                  <FaFacebookF className="text-white text-xl" />
                  <FaFacebookF className="text-white text-xl" />
                  <FaFacebookF className="text-white text-xl" />
               </ul>
             </div> 
        </footer>
    )
}