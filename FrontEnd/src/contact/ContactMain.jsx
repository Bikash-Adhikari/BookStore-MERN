import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

function ContactMain() {
    return (
        <>
            <Navbar />
            <div className='min-h-screen flex justify-center'>
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default ContactMain
