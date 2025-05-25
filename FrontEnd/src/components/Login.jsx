import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success('Login Successfully!');
                    document.getElementById('my_modal_3')?.close();
                    localStorage.setItem("users", JSON.stringify(res.data.user));
                    // window.location.reload()
                    // navigate('/courses');
                    setTimeout(() => {
                        window.location.href = '/courses';
                    }, 1000);
                }


            })
            .catch((err) => {
                if (err.response) {
                    toast.error('Error: ' + err.response.data.message)
                    setTimeout(() => { }, 2000);
                }
            })
    };


    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-black font-medium p-10 max-w-sm">


                    <form method="dialog">
                        {/* Login.jsx ==> This login-model's close button redirect back to the same page where the modal opens*/}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>


                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 " >Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-4">
                        {/* email */}
                        <div className='text-left'>
                            <label for="email" className="block mb-1 text-gray-600 font-medium">Email</label>

                            <input
                                type="email" id="email" name="email"
                                placeholder='Enter your email'
                                className="w-full px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 text-sm"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-xs text-red-600' >Email is required</span>}
                        </div>


                        {/* password */}
                        <div className='text-left'>
                            <label for="password" className="block mb-1 text-gray-600 font-medium">Password</label>

                            <input
                                type="password" id="password" name="password"
                                className="w-full px-4 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-xs text-red-600' >Password is required</span>}

                        </div>


                        {/* remember me */}
                        <div className="flex items-center justify-between">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="checkbox text-blue-600  border-1 border-gray-400 rounded-sm" />
                                <span className="ml-2 text-sm  text-white-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>


                        {/* login button */}
                        <button type="submit"
                            className="w-full bg-blue-800 text-sm text-white py-1.5 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer">
                            Login
                        </button>
                    </form>


                    <p className="text-sm text-center text-gray-600 mt-6">
                        <span className='font-medium'>Don't have an account?{""}</span>
                        <button
                            className="text-blue-600 hover:underline cursor-pointer ml-1 font-semibold"
                            onClick={() => {
                                document.getElementById('my_modal_3')?.close(); // close the modal if it's open (Login.jsx)
                                navigate('/signup'); // navigate to signup
                            }}
                        >
                            Sign up
                        </button>
                    </p>


                </div>
            </dialog>
        </div>
    )
}

export default Login
