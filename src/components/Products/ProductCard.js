import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

import './products.css'

const ProductCard = () => {
  return (
    <div className='product-card-container'>
      <div className='product-image-container'>

        <img />
        <div className='product-infobar-container'>

        </div>

      </div>

      <div className='product-info-container'>
        <div>
          <h3 className='product-title'>Product title</h3>
          <h3 className='price'>Price</h3>
        </div>
        
        <p>Description</p>
        <button className='btn-2'>See more <BsArrowRight/></button>

      </div>

    </div>
  )
}

export default ProductCard