import React, { useEffect, useState } from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import { ThemeProvider } from './contexts/Theme'
import Signup from './components/Signup'
import ContactMain from './contact/ContactMain'




function App() {
  const [themeMode, setThemeMode] = useState("light");

  //pass functionality for lightTheme & darkTheme
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }



  //Actual Change Theme in HTML ==> useEffec HOOK
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])



  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <>
        <div className='bg-white text-black dark:bg-blue-950 dark:text-white'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/contact' element={<ContactMain />} />
          </Routes>
        </div>
      </>
    </ThemeProvider>
  )
}

export default App

