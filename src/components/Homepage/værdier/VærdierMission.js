import React from 'react'

import './værdier.css'

const VærdierMission = ({post}) => {

    const img = post.acf.værdierbillede?.url;
  return (
    <section key={post.id} className='vaerdier-mission'>
        <div className='mission-cards'>
            <div className='mission-banner'>
                <img src={img} alt={post.acf.værdierbillede.alt}/>
                <div className='banner-tekst'>
                    <h2>{post.acf.vaerdierOverskrift}</h2>
                    <p>{post.acf.vaerdierTekst}</p>
                </div>
            </div>
                <div className='mission-card test'>
                    <h3>{post.acf.vaerdierKort1}</h3>
                    <p>{post.acf.kort1tekst}</p>
                </div>
                <div className='mission-card'>
                    <h3>{post.acf.vaerdierKort2}</h3>
                    <p>{post.acf.kort2tekst}</p>
                </div>
                <div className='mission-card test2'>
                    <h3>{post.acf.vaerdierKort3}</h3>
                    <p>{post.acf.kort3tekst}</p>
                </div>
        </div>
    </section>
  )
}

export default VærdierMission