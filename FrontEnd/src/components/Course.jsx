import React, { useEffect, useState } from 'react'
// import list from "../../public/list.json" ==> we do not need this since we get data from MongoDB
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { BACKEND_URL } from '../../utils/utils.js';

function Course() {
    const [book, setBook] = useState([])
    // const baseURL = import.meta.env.VITE_REACT_APP_FRONTEND_BASE_URL || 'http://localhost:4001';
    const baseURL = BACKEND_URL || 'http://localhost:4001';

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get(`${baseURL}/book`, {
                    withCredentials: true
                }) //getting data fron Backend & Database
                // console.log(res.data)
                setBook(res.data)

            } catch (error) {
                console.error(error)
            }
        }

        getBook();
    }, [])



    return (
        <>
            <div className='max-w-screen-2xl container  md:px-20 px-4 bg-white text-black dark:bg-blue-950 dark:text-white'>

                <div className='pt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl font-medium'>We are delighted to have you <span className='text-blue-500 font-medium'>here :)</span> !!!</h1>

                    <p className='mt-12 font-medium'>Welcome to our Bookstore Course Page! Here, you'll discover curated learning materials, helpful guides, and top recommendations to enhance your reading and knowledge journey. Whether you're a student, teacher, or book lover, we’re excited to support your academic and personal growth. Let’s explore the world of books together!</p>

                    <Link to={'/'}>
                        <button className='bg-blue-700 px-3 py-1.5 my-5 cursor-pointer rounded hover:bg-blue-800 duration-300 font-medium text-white'>Back</button>
                    </Link>
                </div>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item, id) => {
                            return <Cards key={id} item={item} />
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Course
