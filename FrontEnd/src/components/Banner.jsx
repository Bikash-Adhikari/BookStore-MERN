import React from 'react'
import BannerImg from '/BannerBook.png'

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 bg-white text-black dark:bg-blue-950 dark:text-white'>
                <div className='w-full order-2 md:order-1 pt-10 md:w-1/2 md:pt-30 '>

                    <div className='space-y-8'>
                        <h1 className='text-4xl font-bold'>
                            Hello, welcome here to learn something <span className='text-blue-500'>new everyday!!!</span>
                        </h1>

                        <p className='font-medium'>
                            Our passion lies in books that endure. From Austen’s wit and Dickens’s drama to Dostoevsky’s depth and Nietzsche’s daring, Orwell’s insight to Woolf’s lyricism, each title is hand-picked for its power to move you. We scour auctions and private collections worldwide, selecting sweeping epics, incisive essays, and poetry that shaped generations—each edition chosen not merely for its reputation but for the way it brings history alive and sparks conversation today.
                        </p>

                        <label className="input validator bg-white text-black dark:bg-blue-950 dark:text-white border-2 border-gray-300">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input type="email" className='font-medium' placeholder="yourmail@site.com" required />
                        </label>

                    </div>

                    <button className="btn font-medium mt-5 border-none outline-none bg-blue-700 hover:bg-blue-800">Suscribe</button>


                </div>


                <div className='w-full order-1 md:w-1/2 '>
                    <img src={BannerImg} className='w-auto h-auto' alt="" />
                </div>


            </div>
        </>
    )
}

export default Banner
