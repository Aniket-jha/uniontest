"use client"
import { ThemeProvider } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import { db } from '../../../app/firebase.config'
import BlogContentMain from './BlogContentMain'
import { useRouter } from 'next/navigation'

const BlogContent = ({params}) => {
  const [blogContent, setBlogContent] = useState({})
  
  const fetchProperty = async () =>{
    const docRef = doc(db, "blogs", params.id);
const docSnap = await getDoc(docRef);
      
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  const data = docSnap.data()
  setBlogContent(data)
   
   
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
   }

  useEffect(() => {
    fetchProperty()
    console.log(params.id)
  }, [params.id])
  return (
    <div>
      <ThemeProvider>
        <BlogContentMain blogContent={blogContent} />
      </ThemeProvider>
    </div>
  )
}

export default BlogContent