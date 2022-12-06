import React from 'react'
import { useState } from 'react'

import './kurv.css'
import KurvMenu from './KurvMenu'


const Kurv = () => {
    // Viser og gemmer kurven
    const [visKurv, setVisKurv] = useState(false)

  return (

        <div>
            <div className='kurv-knap' onClick={() => setVisKurv(true)}>Min Kurv</div>
            <KurvMenu setVisKurv={setVisKurv} visKurven={visKurv}/>
        </div>
  )
}

export default Kurv