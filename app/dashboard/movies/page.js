import Image from "next/image";

export default function Movies() {
    return (
        <main className="min-h-screen py-20 p-4">
           <h1 className="text-4xl font-bold text-center text-red-500">Movies Collection</h1>
           <div>
               <div className="w-60 h-70 rounded shadow-md">
                 <Image
                  src="/loginbg.jpg"
                  alt="movie-image"
                  width={200}
                  height={200}
                  className="w-60 h-35 rounded-t-md"
                 />
                 <div className="px-3 py-3">
                     <p>Title</p>
                     <p>Genre</p>
                     <p>Release year</p>
                     <p>Comments</p>
                 </div>

               </div>
           </div>
        </main>
    )
}