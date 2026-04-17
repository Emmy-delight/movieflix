 "use client"
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

export function Navbar(){
    const [dropDown,setDropDown] = useState(false);

    const toggleMenu = ()=>{
        setDropDown(!dropDown);
    }
    return(
        <main className="bg-red-500 shadow shadow-gray-300 w-full fixed z-3 top-0">
            <div className="h-15 px-5 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">MovieFlix</h1>
                <ul className=" text-white hidden md:flex  md:gap-8 md:text-lg md:font-semibold">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/dashboard/add-movie"><li>Add-Movie</li></Link>
                    <li>Movies</li>
                    <Link href="/dashboard/profile"><li>Profile</li></Link>
                </ul>
                 <Link href="/auth/login"><div className="hidden md:block lg:block">
                    <button className="w-20 h-10 shadow bg-black text-white rounded cursor-pointer">Login</button>
                 </div>
                 </Link>
                 <div  className="block  md:hidden lg:hidden">
                    <RiMenu3Fill onClick={toggleMenu} className="text-3xl text-white" />
                 </div>
            </div>
            {dropDown && (
            <div className="flex flex-col gap-3 justify-center items-center md:hidden">
                <ul className="flex flex-col gap-5 text-sm text-white font-semibold">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/dashboard/add-movie"><li>Add-Movie</li></Link>
                    <li>Movies</li>
                    <Link href="/dashboard/profile"><li>Profile</li></Link>
                </ul>
                <Link href="/auth/login">
                <div>
                    <button className="w-15 h-9 text-white bg-black rounded-md cursor-pointer">Login</button>
                </div>
               </Link>
            </div>
            )}

        </main>
    )
}