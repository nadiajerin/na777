"use client"
import { useContext, useEffect, useState } from 'react'
import Navbar from '../Shared/Navbar'
import Image from 'next/image'
import { authContext } from '../lib/AuthProvider'
import Swal from 'sweetalert2'
import Link from 'next/link'

const page = () => {

    // user database info
    const currentUser = useContext(authContext)
    const { user } = currentUser;
    const [finaluser, setUser] = useState(null);


    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`http://localhost:3000/api/info/${user.email}`, {
                    method: 'GET'
                });
                const data = await response.json();
                // console.log("data", data)
                setUser(data);
                setBalance(data?.balance)
                // console.log(finaluser)
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }

        fetchUser();
    }, [user, setUser]);
   
    // Handle Bkash Deposit 
    const handleDepositBkash = async (e) => {
        e.preventDefault()
        const form = e.target;
        const number = form.number.value;
        const mobile = form.mob.value;
        if(finaluser?.balance < number){
            alert('Invalid Balance, try Again')
            return
        }
        // Now post the user data into database
        const response = await fetch('/api/withdraw/bkash', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number, mobile, email: user.email })
        });

        const data = await response.json();  // <- NEED to await here
        //   console.log('Server Response:', data);
        if (data.insertedId) {
            alert("Your Withdraw Request Sent")
        }
    }

    // Handle nagad Deposit 
    const handleDepositBNagad = async (e) => {
        e.preventDefault()
        const form = e.target;
        const number = form.number.value;
        const mobile = form.mob.value;
        if(finaluser?.balance < number){
            alert('Invalid Balance, try Again')
            return
        }

        // Now post the user data into database
        const response = await fetch('/api/withdraw/nagad', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number, mobile, email: user.email })
        });

        const data = await response.json();  // <- NEED to await here
        //   console.log('Server Response:', data);
        if (data.insertedId) {
            alert("Your Withdraw Request Sent")
        }
    }

    if (!user) {
        return <div className='w-full '>
            <Link href={"/login"} className='text-center text-white flex justify-center text-xl'>Login Please</Link>
        </div>
    }

    return (
        <div>
            <Navbar />
            <p className='bg-yellow-400  mx-auto md:w-2/3 mt-4 md:mt-10 text-center p-1'>Withdraw</p>
            <div className='container mx-auto md:w-2/3 text-black
        bg-white p-4 text-justify md:leading-8'>
                <p>আপনি যদি ৩ ঘন্টার মধ্যে আপনার গেমিং অ্যাকাউন্টে ডিপোজিটের টাকা না পান তাহলে অনুগ্রহ করে লেনদেনের প্রমাণ সহ আমাদের সাধারণ ইমেইল এ্যাড্রেস n9113613@gmail.com -এ যোগাযোগ করুন পরবর্তী বিবরণে দয়া করে লিখুন আপনার Transaction ID, Time, date, Amount , এবং বিকাশ /নগদ অ্যাপ থেকে লেনদেনের স্ক্রিনশট </p>
            </div>
            <div className='mt-6 grid grid-cols-2 gap-4 mx-auto md:w-2/3'>
                <div className='mx-auto '>
                    <Image src={"/bkash.jpg"} className='w-80 mx-auto' alt='bkash' width={1000} height={500} />
                    <button className="btn bg-white w-full p-1" onClick={() => document.getElementById('my_modal_3').showModal()}>Click Here</button>
                    <dialog id="my_modal_3" className="modal w-full md:w-2/3 h-full">
                        <div className="modal-box p-4 ">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-black text-white p-1">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">ডিপোজিট!</h3>
                            <p className="py-4 text-xl font-semibold">বিকাশ ওয়ালেট নাম্বার : 01778229692</p>
                            <p className='leading-8'>N/A 777 এ টাকা ডিপোজিট করতে উপরের নাম্বারে বিকাশ অ্যাপ থেকে সর্বনিম্ন ৫০০ টাকা সেন্ড মানি করে নিচে লেনদেনের transaction আইডি এবং আপনি যে নাম্বার থেকে টাকা পাঠিয়েছেন সে নাম্বার দিয়ে ফরম টি সম্পূর্ণ করে সাবমিট করুন।</p>
                            <form onSubmit={handleDepositBkash}>
                                <div className='mt-2'>
                                    <label htmlFor="">Withdraw Amount :</label><br />
                                    <input name='number' type="number" className='border-2 px-4 py-2 border-red-600' required />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="">Mobile Number :</label><br />
                                    <input name='mob' type="number" className='border-2 px-4 py-2 border-red-600' required />
                                </div>
                                <div className='mt-4'>
                                    <input type="submit" value="Submit" className='bg-green-500 hover:bg-green-400 px-5 py-2 btn text-white' />
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
                {/* Nagad Wallet */}
                <div className='mx-auto '>
                    <Image src={"/nagadd.jpg"} className='w-80 mx-auto' alt='bkash' width={1000} height={500} />
                    <button className="btn bg-white w-full p-1" onClick={() => document.getElementById('my_modal_3').showModal()}>Click Here</button>
                    <dialog id="my_modal_3" className="modal w-full md:w-2/3 h-full">
                        <div className="modal-box p-4 ">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">ডিপোজিট!</h3>
                            <p className="py-4 text-xl font-semibold">নগদ ওয়ালেট নাম্বার : 01778229692</p>
                            <p className='leading-8'>N/A 777 এ টাকা ডিপোজিট করতে উপরের নাম্বারে নগদ অ্যাপ থেকে সর্বনিম্ন ৫০০ টাকা সেন্ড মানি করে নিচে লেনদেনের transaction আইডি এবং আপনি যে নাম্বার থেকে টাকা পাঠিয়েছেন সে নাম্বার দিয়ে ফরম টি সম্পূর্ণ করে সাবমিট করুন।</p>
                            <form onSubmit={handleDepositBNagad}>
                                <div className='mt-2'>
                                    <label htmlFor="">Withdraw Amount :</label><br />
                                    <input name='number' type="number" className='border-2 px-4 py-2 border-red-600' required />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="">Mobile Number :</label><br />
                                    <input name='mob' type="number" className='border-2 px-4 py-2 border-red-600' required />
                                </div>
                                <div className='mt-4'>
                                    <input type="submit" value="Submit" className='bg-green-500 hover:bg-green-400 px-5 py-2 btn text-white' />
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>

            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

        </div>
    )
}

export default page
