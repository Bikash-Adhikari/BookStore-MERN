import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
    return (
        <>
            <Navbar />
            <div className='min-h-screen flex justify-center'>
                <Course />
            </div>
            <Footer />
        </>
    )
}

export default Courses
