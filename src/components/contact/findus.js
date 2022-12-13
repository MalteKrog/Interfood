import React from 'react'

const Findus = () => {
    return (
        <div className='map-container'>
            <div className='tekst-container'>
                <h2 className='maph2'>Adresse</h2>
                <h2 className='maph2'>Du kan finde os på følgende addresse</h2> 
            </div>
            <div className='map'>
                <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=Krogsg%C3%A5rdsvej%206%208620%20Kjellerup&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
            </div>
        </div>
    )
}

export default Findus