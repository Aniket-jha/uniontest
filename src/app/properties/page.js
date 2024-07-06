"use client"
import React from 'react'
import PropertiesPage from './Properties'
import { ThemeProvider } from '@material-tailwind/react'

const Properties = () => {
  return (
    <ThemeProvider>
    <PropertiesPage />
    </ThemeProvider>
  )
}

export default Properties