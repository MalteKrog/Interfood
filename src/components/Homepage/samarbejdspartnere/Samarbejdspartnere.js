import React from 'react'
import '../homepage.css'
import wokthisway from '../../../assets/Wokthisway.png'
import letzsushi from '../../../assets/letzsushi.png'
import kowloon from '../../../assets/kowloon.webp'

const Samarbejdspartnere = ({ post }) => {

  return (
    <div className='trusted-section'>
        <h2>Trusted by some of the World’s Best Companies</h2>
        <div className='firmaer'>
            <div className='circle'>
                <img src={wokthisway} alt="wok this way" />
            </div>
            <div className='circle'>
                <img src={letzsushi} alt="Letz sushi" />
            </div>
            <div className='circle'>
                <img src={kowloon} alt="kowloon" />
            </div>
        </div>
    </div>
  )
}

export default Samarbejdspartnere