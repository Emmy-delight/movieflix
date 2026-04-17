import Image from "next/image";
import Link from "next/link";


export default function Home(){
   return(
      <main>
         <div className="bg-[url(/MD.jpeg)] h-screen bg-no-repeat bg-cover">
           <h1 className="text-5xl font-bold text-white text-center">This is a background Image </h1>
         </div>
         <div className="my-5 grid grid-cols-3">
            <div className="w-100 h-100 rounded-md shadow-md">
               <Image
                 src="/MD.jpeg"
                 alt="image"
                 width={200}
                 height={200}
                 className="w-100 h-100 rounded-md"
               />
            </div>
            <div className="w-100 h-100 rounded-md shadow-md">
               <Image
                 src="/MD.jpeg"
                 alt="image"
                 width={200}
                 height={200}
                 className="w-100 h-100 rounded-md"
               />
            </div>
            <div className="w-100 h-100 rounded-md shadow-md">
               <Image
                 src="/MD.jpeg"
                 alt="image"
                 width={200}
                 height={200}
                 className="w-100 h-100 rounded-md"
               />
            </div>
         </div>
      </main>
      
   )
}
