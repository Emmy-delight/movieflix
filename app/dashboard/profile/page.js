import { auth, signOut } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProfilePage(){
    const session = await auth();
    console.log(session);
      if(!session?.user){
         redirect("/auth/login")
      }
    return(
        <main className="min-h-screen flex justify-center py-20 px-5">
            <div className="w-full md:w-90 md:max-h-140 rounded shadow-md py-5 px-4">
                <h1 className="text-center font-semibold text-xl">Profile Details</h1>
                <div className="mt-2 flex justify-center">
                   <Image
                    src={session?.user?.image}
                    alt="profile-image"
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full"
                   />
                </div>
                <div className="px-5 py-5 flex flex-col gap-4 mt-8 w-80 h-50 shadow rounded-md">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">FullName</p>
                        <p className="text-gray-600 text-xs">{session?.user?.name.toUpperCase()}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Email</p>
                        <p className="text-gray-600 text-xs">{session?.user?.email}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Phone Number</p>
                        <p className="text-gray-600 text-xs">{session?.user?.id}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">Address</p>
                        <p className="text-gray-600 text-xs">123, Boeing Avenue, Tx Dallas</p>
                    </div>

                </div>
                <form action={async ()=>{
                            "use server"
                        await  signOut();
                }}
                className="mt-2">
                    <button type="submit" className="w-20 h-10 rounded-md shadow-md text-white bg-red-500 cursor-pointer">Logout</button>
                </form>

            </div>
         
        </main>
    )
}