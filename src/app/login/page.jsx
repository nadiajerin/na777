"use client"
import Link from "next/link"
import { useContext } from "react"
import { authContext } from "../lib/AuthProvider"
import { useRouter } from 'next/navigation';


const Login = () => {

    const value = useContext(authContext)
    const { handleLogin } = value;
    const router = useRouter();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userValue = [email, password];

        if(password.length < 6){
            alert('password should be 6 character')
        }

        // Firebase Login 
        handleLogin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if(user){
                    router.push('/');
                    alert('login success')
                }
                // alert(user)
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
               
            })
    }


    return (
        <div className='relative'>
            <div className="flex items-center justify-center lg:min-h-screen log-bg">
                <div className="bg-black  z-10 p-10 rounded-lg shadow-xl w-96 text-white">
                    <h2 className="text-3xl font-bold mb-6 text-center">Login Now</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            required
                            className="w-full p-3 rounded-md bg-gray-800 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            className="w-full p-3 rounded-md bg-gray-800 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 rounded-md font-bold hover:bg-orange-600 transition"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-center mt-4 text-gray-300">
                        Already have an account? <Link href="/register" className="text-orange-500 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
