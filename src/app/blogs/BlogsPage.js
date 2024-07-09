import BlogList from '@/components/Blogs/BlogList'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import React from 'react'

const BlogsPage = () => {
  return (
    <div>
        <NavbarTwo />
        <div className='lg:pt-[120px] pt-[60px]'>
            <BlogList />
            <Footer />
        </div>
    </div>
  )
}

export default BlogsPage