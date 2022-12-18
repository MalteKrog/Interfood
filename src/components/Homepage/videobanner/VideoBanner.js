import React from 'react'
import video from "../../../assets/Interfoodcinematic.mp4"

const VideoBanner = ({ post }) => {
  return (
    <div className='video-banner'>
        <h1>Interfood</h1>

        <h2>Danmarks bedste leverandør af asiatiske varer</h2>
      <video className="video" src={video} autoPlay muted loop />

    </div>
  )
}

export default VideoBanner