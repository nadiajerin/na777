"use client"
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../lib/AuthProvider';
import Link from 'next/link';

export default function UserDashboard() {

  const currentUser = useContext(authContext)
      const { user, loading, handleLogOut } = currentUser;
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
  
    // Logout User
    const handlesingout = () =>{
        handleLogOut()
        .then(() => {
            alert(" Sign-out successful.")
          }).catch((error) => {
            // An error happened.
          });
          
    }

    if(!user){
        return <div className='w-full '>
            <Link href={"/login"} className='text-center text-white flex justify-center text-xl'>Login Please</Link>
        </div>
    }

  return (
    <div className="min-h-screen bg-black p-6">
      {/* Navbar */}
      <nav className="bg-white shadow rounded-lg p-4 flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800"> N/A 777</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Hello, {finaluser?.name}</span>
          <button onClick={handlesingout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Logout</button>
        </div>
      </nav>

      {/* User Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-600">Current Balance </h2>
          <p className="text-3xl font-bold text-green-600">${finaluser?.balance}.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
          <p className='text-xl'>Name: {finaluser?.name}</p>
          <br />
          <p className='text-xl'>Email: {finaluser?.email}</p>
        </div>
      </div>
    </div>
  );
}
