import React from 'react'
import Login from './Login'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import { BACKEND_URL } from '../../utils/utils.js';

function Signup() {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const Navigate = useNavigate()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const baseURL = BACKEND_URL || 'http://localhost:4001';


    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios.post(`${baseURL}/user/signup`, userInfo, {
            withCredentials: true
        })
            .then((res) => {
                // console.log(res.data)
                if (res.data) {
                    toast.success('Signup Successfully!');
                    Navigate(from, { replace: true })
                    // Navigate(document.getElementById("my_modal_3").showModal()) //this is popup of login 
                }
                localStorage.setItem("users", JSON.stringify(res.data.user));
            })
            .catch((err) => {
                if (err.response) {
                    toast.error('Error: ' + err.response.data.message)
                }
            })

    };

    return (
        <>
            <div className='flex items-center justify-center bg-blue-100 dark:bg-blue-950 h-dvh'>
                <div className="bg-white rounded-xl shadow-md shadow-gray-400 w-full max-w-md flex flex-col gap-4 mx-1.5">

                    <div className='relative mb-3'>
                        <form method="dialog">
                            {/* Signup.jsx ==> This close btn of daisyUI will redirect to home as <Link> defines */}
                            <Link to='/'>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black hover:text-white ">✕</button>
                            </Link>
                        </form>
                    </div>


                    <div className='px-8 py-5'>
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 underline">Create an Account</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3.5">
                                <label for="name" className="block text-gray-600 font-medium text-sm">Full Name</label>
                                <input
                                    type="text" id="name" name="name"
                                    placeholder='Enter your full name'
                                    className="w-full px-4 py-1.5 font-medium text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                    {...register("fullname", { required: true })}
                                />
                                {errors.fullname && <span className='text-xs text-red-600 font-medium' >Fullname is required</span>}
                            </div>

                            <div className="mb-3.5">
                                <label for="email" className="block  text-gray-600 font-medium text-sm">Email</label>
                                <input
                                    type="email" id="email" name="email" autocomplete="email"
                                    placeholder='Enter your email'
                                    className="w-full px-4 py-1.5 font-medium text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-xs text-red-600 font-medium' >Email is required</span>}
                            </div>

                            <div className="mb-3.5">
                                <label for="password" className="block text-gray-600 font-medium text-sm">Password</label>
                                <input
                                    type="password" id="password" name="password" autocomplete="new-password"
                                    placeholder='Enter your password'
                                    className="w-full px-4 py-1.5 font-medium text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-xs text-red-600 font-medium' >Password is required</span>}
                            </div>

                            <div className="mb-6">
                                <label for="confirm-password" className="block  text-gray-600 font-medium text-sm">Confirm Password</label>
                                <input
                                    type="password" id="confirm-password" name="confirm-password"
                                    placeholder='Confirm your password'
                                    className="w-full px-4 py-1.5 font-medium text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                                    {...register("confirmPassword", { required: true })}
                                />
                                {errors.confirmPassword && <span className='text-xs text-red-600 font-medium' >Confirm-password is required</span>}
                            </div>

                            <button type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white  text-sm font-semibold py-1.5 px-4 rounded-lg transition duration-300 cursor-pointer">
                                Sign Up
                            </button>
                        </form>

                        <p className="text-sm text-gray-600 mt-4 text-center">
                            <span className='font-medium'>Already have an account?{" "} </span>

                            <button
                                className="text-blue-500 hover:underline font-semibold cursor-pointer"
                                onClick={() => document.getElementById("my_modal_3").showModal()}

                            >
                                Login
                            </button>
                            <Login />

                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Signup
