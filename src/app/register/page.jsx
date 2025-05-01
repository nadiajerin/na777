"use client"

import { useContext } from "react";
import { authContext } from "../lib/AuthProvider";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const page = () => {

     const value = useContext(authContext)
    const { handleRegister } = value;
    const router = useRouter();
    
    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const balance = 0.00;
      
        if (password.length < 6) {
          alert('Password should be at least 6 characters');
          return;
        }
      
        try {
          // Firebase Register
          const userCredential = await handleRegister(email, password);
          const user = userCredential.user;
      
          if (user) {
            alert('Register success');
            router.push('/');
            // Now post the user data into database
            const response = await fetch('/api/info', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ name, email, password, balance })
            });
      
            const data = await response.json();  // <- NEED to await here
            console.log('Server Response:', data);
      
            if (response.ok) {
              // maybe redirect or show success message
            } else {
              console.error('Failed to save user info:', data.message);
            }
          }
        } catch (error) {
          console.error('Error during register:', error.message);
        }
      }
      

    return (
        <div className='relative'>
            <div className="flex items-center justify-center lg:min-h-screen reg-bg">
                <div className="bg-black  z-10 p-10 rounded-lg shadow-xl w-96 text-white">
                    <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Username"
                            className="w-full p-3 rounded-md bg-gray-800 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="w-full p-3 rounded-md bg-gray-800 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="password"
                             name="password"
                            placeholder="Password"
                            className="w-full p-3 rounded-md bg-gray-800 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 rounded-md font-bold hover:bg-orange-600 transition"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-center mt-4 text-gray-300">
                        Already have an account? <Link href="/login" className="text-orange-500 hover:underline">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page
