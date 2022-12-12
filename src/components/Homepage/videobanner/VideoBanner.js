import React from 'react'

const VideoBanner = ({ post }) => {
  return (
    <div className='video-banner'>

        <iframe src="https://www.youtube.com/embed/w_lMw7ZqhYs?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h1>Interfood</h1>

        <h2>Danmarks bedste leverandør af asiatiske varer</h2>

    </div>
  )
}

export default VideoBanner