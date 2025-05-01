'use client';

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { authContext } from '../lib/AuthProvider';
import Image from 'next/image';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const currentUser = useContext(authContext)
    const { user, loading } = currentUser;
    // console.log(user.email)
    const [finaluser, setUser] = useState(null);
    
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`/api/info/${user.email}`, {
          method: 'GET'
        });
        const data = await response.json();
        // console.log("data", data)
        setUser(data);
        // console.log(finaluser)
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    fetchUser();
  }, [user, setUser]);


    return (
        <nav className=" text-white md:pt-6 max-md:p-4 main-width ">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div >
                    <Link href="/">
                        <p className="text-xl lg:text-2xl font-semibold">N/A 777</p>
                    </Link>
                </div>


                {/* Sign In/Sign Up Buttons */}
                {user ? 
                    <div className='flex gap-2 items-center'>
                        <p className='bg-yellow-400 px-3 py-1 text-black font-bold'>Balance: {JSON.stringify(finaluser?.balance)}</p>
                         <Link href={"/user-dashboard"}><Image src={"/uservector.png"} className='w-10 hidden md:flex' alt='user' width={500} height={500} /> </Link>
                    </div>:
                    <div className="hidden md:flex space-x-4">
                        <Link href="/login" className="px-4 py-2 rounded bg-gradient-to-b from-[#361600] via-[#fe6702]">Log In</Link>
                        <Link href="/register" className="px-4 py-2  bg-gradient-to-b from-[#361600] via-[#fe6702] rounded">Register</Link>
                    </div>
                }

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col space-y-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 mt-3 text-center bg-white p-4">
                  {user ?   <>
                    <Link href="/user-dashboard" className=" text-center bg-green-500 py-2">User Profile</Link>
                    <Link href="/deposit" className=" text-center bg-green-500 py-2">Deposit</Link>
                    <Link href="/withdraw" className=" text-center bg-green-500 py-2">Withdraw</Link>
                  </> :
                  <><Link href="/login" className="text-center bg-green-500 py-2">Login</Link>
                  <Link href="/register" className="text-center bg-green-500 py-2">Register</Link></>
                  }

                </div>
            )}
        </nav>
    )
}
