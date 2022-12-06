import React from 'react'

import './kurv.css'

const KurvMenu = ({visKurven, setVisKurv}) => {
  return (
    <dialog className='kurv-menu' open={visKurven}  onClick={() => setVisKurv(!visKurven)}>
        <button onClick={() => console.log(visKurven)}>Min Kurv</button>
        <button onClick={() => console.log(visKurven)}>Min Kurv</button>
    </dialog>
  )
}

export default KurvMenu