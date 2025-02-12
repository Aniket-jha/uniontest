import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase.config";

const fetchBlogs = async () =>{
  const data = []
  
  
}


export default async function sitemap() {
  // const q = query(collection(db, "blogs")) 
  // const querySnapshot = await getDocs(q);
  // const posts = []
  //  querySnapshot.forEach((doc) => (
  //  posts.push(
  //   {
  //     url: `https://unionliving.in/blogs/${doc.id}`,
  //     lastModified: new Date(),
  //     changeFrequency: 'yearly',
  //     priority: 0.5,
  //   }
  //  ) 
  // ));
  
  return [
    {
      url: 'https://unionliving.in',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://unionliving.in/properties/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://unionliving.in/blogs/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://unionliving.in/ourstory/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://unionliving.in/property/southside-coliving-mahalaxmi/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://unionliving.in/property/terra-coliving-juhu/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://unionliving.in/property/varsity-coliving-juhu-santacruz/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://unionliving.in/property/housemate-coliving-kharadi-pune/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://unionliving.in/property/casa-coliving-andheri-east-mumbai/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://unionliving.in/property/hamlet-coliving-baner-pune/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority:0.8,
    },
    {
      url: 'https://unionliving.in/property/bayside-coliving-seawoods-navi-mumbai/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority:0.8,
    },
    {
      url: 'https://unionliving.in/property/abode-coliving-dhankawadi-pune/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://unionliving.in/property/chapter1-coliving-cbd-belapur/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://unionliving.in/community/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://unionliving.in/onboardingpolicy/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    {
      url: 'https://unionliving.in/termsandcondition/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    {
      url: 'https://unionliving.in/privacy-policy/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    // ...posts
  ]
}