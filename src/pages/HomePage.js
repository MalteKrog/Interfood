import React from 'react'
import Kurv from '../components/Kurv/Kurv.js'
import VideoBanner from '../components/Homepage/videobanner/VideoBanner'
import VærdierMission from '../components/Homepage/værdier/VærdierMission.js'

import '../components/Homepage/homepage.css'
const HomePage = () => {
  return (
    <main>
      <VideoBanner />
      <VærdierMission />
      <Kurv />
    </main>
  )
}

export default HomePage