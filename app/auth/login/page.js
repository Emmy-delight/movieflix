import { TextField } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaSquareGithub } from "react-icons/fa6";
import { signIn } from "@/auth";

export default function LoginPage(){
    return(
        <main className="min-h-screen">
            <div className="bg-[url(/loginbg.jpg)] h-screen bg-no-repeat bg-cover flex justify-center items-center px-5 py-10 ">
              <div className="w-full bg-white shadow-md rounded md:w-92 md:flex-col md:gap-3 md:max-h-90 md:px-5 md:py-4">
                 <h1 className="text-2xl font-semibold text-center">Sign Into MovieFlix</h1>
                 <p className="text-sm text-gray-500 mt-2 text-center">Create an account or sign In</p>
                 <form className="flex flex-col gap-3 mt-3">
                    <div>
                        <TextField 
                         fullWidth
                         type="email"
                         label="Email"
                         size="small"
                         placeholder="emmanuel@gmail.com"
                        />
                    </div>
                    <button type="submit" className="w-full h-10 font-semibold bg-red-500 text-white rounded-md cursor-pointer flex justify-center items-center hover:opacity-75">Continue</button>
                 </form>
                 <p className="text-gray-500 text-center mt-2">Or sign up with</p>
                 <div className="flex justify-center gap-4 pb-10">
                   <form action={async ()=>{
                                   "use server"
                              await signIn("google")
                   } } 
                   >
                      <button className="w-12 h-12 cursor-pointer flex justify-center items-center rounded-md shadow-md">
                         <FcGoogle  className="text-4xl"/>
                      </button>
                   </form>
                   <form>
                       <button className="w-12 h-12 cursor-pointer flex justify-center items-center rounded-md shadow-md">
                           <FaSquareGithub className="text-4xl" />
                       </button>
                   </form>
                 </div>
              </div>  
            </div>
        </main>
    )
}