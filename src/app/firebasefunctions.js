import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import { db } from './firebase.config';


export async function getSinglePost(slug){
    const docRef = doc(db, "blogs", slug);
    const docSnap = await getDoc(docRef);
          
    if (docSnap.exists()) {
     
      const data = docSnap.data()
      return data
       
       
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
}

export async function getBlogPosts() {
    const q = query(collection(db, "blogs"),orderBy("createdAt","desc")) 
        const querySnapshot = await getDocs(q);
        const posts = []
         querySnapshot.forEach((doc) => {
         
       posts.push({ id: doc.id, ...doc.data() })
         });
         return posts;
}