import React from 'react'

import VideoBanner from '../components/Homepage/videobanner/VideoBanner'

// CSS import
import '../components/Homepage/homepage.css'
import Kurv from '../components/Kurv/Kurv.js'

const HomePage = () => {
  return (
    <main>
      <VideoBanner />
      <Kurv />

    </main>
  )
}

export default HomePage