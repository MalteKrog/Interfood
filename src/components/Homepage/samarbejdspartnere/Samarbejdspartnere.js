import React from 'react'
import '../homepage.css'

const Samarbejdspartnere = ({ post }) => {

  return (
    <div className='trusted-section'>
        <h2>Trusted by some of the World’s Best Companies</h2>
        <div className='firmaer'>
            <div className='circle'>
                <img src={post.acf.samarbejdspartner?.url} alt={post.acf.samarbejdspartner?.alt} />
            </div>
        </div>
    </div>
  )
}

export default Samarbejdspartnere