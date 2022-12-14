import React, {useState, useEffect} from 'react'
import Kurv from '../components/Kurv/Kurv.js'
import VideoBanner from '../components/Homepage/videobanner/VideoBanner'
import VærdierMission from '../components/Homepage/værdier/VærdierMission.js'

import '../components/Homepage/homepage.css'
import Samarbejdspartnere from '../components/Homepage/samarbejdspartnere/Samarbejdspartnere.js'
import FeaturedProducts from '../components/Homepage/FeaturedProducts/FeaturedProducts.js'
const HomePage = () => {

  // Wordpress headless CMS request
  const [posts, setPosts] = useState([]);
    
  useEffect(() => {
      async function getData() {
          const response = await fetch("https://interfood.mathiasqm.dk/wp-json/wp/v2/posts?_embed&v=99999");
          const data = await response.json();
                      console.log(data);
          setPosts(data);
      }
      getData();
  }, []);


  return (
    <main>
      {posts.map(post => (
        <>
          <VideoBanner  key={post.id} post={post} />
          <VærdierMission key={post.id} post={post} />   
          <Samarbejdspartnere key={post.id} post={post} />     
          <FeaturedProducts key={post.id} post={post} />
        </>
        ))}

      <Kurv />
    </main>
  )
}

export default HomePage