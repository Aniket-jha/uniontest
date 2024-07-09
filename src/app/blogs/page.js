"use client"
import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import BlogsPage from './BlogsPage'

const Blogs = () => {
  return (
    <div>
        <ThemeProvider>
            <BlogsPage />
        </ThemeProvider>
    </div>
  )
}

export default Blogs