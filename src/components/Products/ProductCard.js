import React, {useState} from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {BsSnow} from 'react-icons/bs'
import {TbTruck,TbTruckOff} from 'react-icons/tb'

import './products.css'
import SingleProductInfo from './SingleProductInfo'

const ProductCard = ({product, i}) => {

  const stockAmmount = product.acf.stockammount
  const category = product.acf.category

  const [showDialog, setShowDialog] = useState(false);
  
  return (
    <>
      <div onClick={() => setShowDialog(true)} className='product-card-container'>
        <div className='product-image-container'>

          <img src={product.acf.productimage.url} alt={product.acf.productimage.alt}/>
          <div className='product-infobar-container'>
            {category === "frost" ?
            <div className='icon-frost'>
              <BsSnow />
              <p>Frost</p>
            </div>: null
            }
            
            {stockAmmount < 0 ?
                <div className='icon-lager'>
                <TbTruck />
                <p>På lager</p>
                </div> :
                  <div className='icon-lager'>
                  <TbTruckOff />
                  <p>Ikke på lager</p>
                  </div> 
            }

          </div>

        </div>

        <div className='product-info-container'>
          <div>
            <h3 className='product-card-title'>{product.acf.producttitle}</h3>
            <h3 className='price'>{product.acf.price}kr.</h3>
          </div>
          
          <p>{product.acf.description}</p>
          <button className='btn-2'>Se mere <BsArrowRight/></button>

        </div>


      </div>
            <SingleProductInfo showDialog={showDialog} setShowDialog={setShowDialog} key={product.id} product={product} i={i} />
    </>
  )
}

export default ProductCard