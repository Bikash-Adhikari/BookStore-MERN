import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'

function Course() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>

                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here :)</span> !!!</h1>

                    <p className='mt-12'>Welcome to our Bookstore Course Page! Here, you'll discover curated learning materials, helpful guides, and top recommendations to enhance your reading and knowledge journey. Whether you're a student, teacher, or book lover, we’re excited to support your academic and personal growth. Let’s explore the world of books together!</p>

                    <Link to={'/'}>
                        <button className='bg-pink-500 px-3 py-1.5 my-5 cursor-pointer rounded hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Course
