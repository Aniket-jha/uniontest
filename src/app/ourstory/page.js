"use client"
import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import AboutPage from './AboutPage'

const About = () => {
  return (
    <div>
      <ThemeProvider>
        <AboutPage />
      </ThemeProvider>
    </div>
  )
}

export default About