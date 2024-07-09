import SingleBlogContent from '@/components/Blogs/BlogContent'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'

const BlogContentMain = ({blogContent}) => {
  console.log(blogContent)
  
  return (
    <div>
      <NavbarTwo />
      <div className='lg:pt-[120px] pt-[60px]'>
       {Object.keys(blogContent).length !==0 && <SingleBlogContent blogContent={blogContent} />}
        <Footer />
      </div>
    </div>
  )
}

export default BlogContentMain