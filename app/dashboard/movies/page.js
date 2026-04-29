  "use client"
import { db } from "@/config/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Movies() {
    const {data: session} = useSession();
    const [movies ,setMovies] = useState([]);

    useEffect(()=>{
      const fetchMovies = async ()=>{
         try{
            const movieRef = query(collection(db,"movies"),where("user","==", session?.user?.id));
            const snapShot = await getDocs(movieRef);
            const compileMovies = [];
            snapShot.docs.forEach((doc)=>{
                compileMovies.push({
                    id:doc.id,
                    data: doc.data()
                })
            })
            setMovies(compileMovies)
         }
         catch(error){
            console.error("Unable to fetchmovies:", error)
         }
      }
      if(session){
        fetchMovies()
      }

    },[session])
    return (
        <main className="min-h-screen py-20 p-4">
           <h1 className="text-4xl font-bold text-center text-red-500">Movies Collection</h1>
           <div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {movies.map((movie)=>
               <div key={movie.id} className="w-75 h-80 rounded shadow-md cursor-pointer">
                 <img
                  src={movie.data.posterUrl}
                  alt="movie-image"
                  width={200}
                  height={200}
                  className="w-75 h-40 rounded-t-md"
                 />
                 <div className="px-3 py-3">
                     <p className="text-xl font-bold">{movie.data.title}</p>
                     <p className="text-sm text-gray-700">Genre: {movie.data.genres}</p>
                     <p className="">Release year: {movie.data.releaseYear} </p>
                     <p className="text-sm text-gray-700">Comments: {movie.data.notes}</p>
                 </div>

               </div>
               )}
           </div>
        </main>
    )
}