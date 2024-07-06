"use client"
import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import CommunityPage from './CommunityPage'

const Community= () => {
  return (
    <div>
        <ThemeProvider>
            <CommunityPage />
        </ThemeProvider>
    </div>
  )
}

export default Community