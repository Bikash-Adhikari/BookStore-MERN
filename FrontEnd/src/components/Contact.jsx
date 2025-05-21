import React, { useState } from "react";
import contactImg from '/contactUs.png'


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (

        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-center  my-5 bg-white text-black dark:bg-blue-950 dark:text-white md:gap-1'>


                <div className='w-full order-1 md:w-2/5 flex justify-center items-start'>
                    <img src={contactImg} className='max-w-100 md:max-w-120' alt="" />
                </div>



                <div className='w-full order-2 md:order-1 pt-6 md:px-10 md:w-3/5 md:pt-20 '>

                    <div className='space-y-3'>
                        <h1 className='text-3xl font-bold'>
                            Let's have a conversation <span className='text-blue-500'>Get in touch!!!</span>
                        </h1>

                        <p className='font-medium text-sm'>
                            You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again. At Choice Screening, we provide the exceptional service we'd want to experience ourselves!
                        </p>
                    </div>

                    <div className="w-full container md:px-1 px-0.5 py-4 bg-white text-black dark:bg-blue-950 dark:text-white">
                        <div className="bg-white text-black font-medium px-2 md:px-8 py-6 rounded-xl border border-gray-300 shadow-xl w-full">

                            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center underline">
                                Contact Us
                            </h2>

                            <form onSubmit={handleSubmit}>

                                {/* Name Email */}
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <div className="w-full">
                                        <label className="mb-1 text-gray-600 font-medium py-1.5 text-sm" htmlFor="name">
                                            Name
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none "
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="mb-1 text-gray-600 font-medium py-1.5 text-sm" htmlFor="email">
                                            Email
                                        </label><br />
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        />
                                    </div>

                                </div>



                                <div>
                                    {/* message */}
                                    <div>
                                        <label className="text-gray-600 font-medium py-1.5 text-sm" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            rows="5"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 text-sm px-4 my-2 rounded-lg transition duration-300 cursor-pointer"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>

            </div>

        </>


    );




};

export default Contact;
