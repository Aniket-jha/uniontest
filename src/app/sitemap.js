import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase.config";

const fetchBlogs = async () =>{
  const data = []
  
  
}


export default async function sitemap() {
  const q = query(collection(db, "blogs")) 
  const querySnapshot = await getDocs(q);
  const posts = []
   querySnapshot.forEach((doc) => (
   posts.push(
    {
      url: `https://www.unionliving.in/blogs/${doc.id}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    }
   ) 
  ));
  
  return [
    {
      url: 'https://www.unionliving.in',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.unionliving.in/properties',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.unionliving.in/blogs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.unionliving.in/ourstory',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://www.unionliving.in/community',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://www.unionliving.in/onboardingpolicy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    {
      url: 'https://www.unionliving.in/termsandcondition',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    {
      url: 'https://www.unionliving.in/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    ...posts
  ]
}