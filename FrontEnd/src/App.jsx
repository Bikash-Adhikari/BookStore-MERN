import React from 'react'
import Home from './home/Home'
import Course from './components/Course'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>

    </>
  )
}

export default App

