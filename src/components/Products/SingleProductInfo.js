import React from 'react';
import { BsSnow } from 'react-icons/bs';
import { TbTruck, TbTruckOff } from 'react-icons/tb';
import { CiStar } from 'react-icons/ci';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useState } from 'react';

import NavData from '../nav/NavData';

const SingleProductInfo = ({ showDialog, setShowDialog, product }) => {
    const stockAmmount = product.acf.stockammount
    const category = product.acf.category

    const [isVisible, setIsVisible] = useState(null);

    const toggle = (i) => {
        if (isVisible === i) {
            setIsVisible(null)
        }
        else
            setIsVisible(i)
        console.log(isVisible)
    }

    return (
        <dialog open={showDialog} className="product-page">
            <div className='product-flex-container'>
                <button onClick={() => setShowDialog(false)} className='btn-2 close'><IoIosArrowRoundBack />close</button>
                <div className='image-container'>
                    <img src={product.acf.productimage.url} alt={product.acf.productimage.alt} />
                </div>

                <div className='sproduct-info'>
                    <div>
                        <h1>{product.acf.producttitle}</h1>
                        <CiStar className='star' />
                        <h1>{product.acf.price}kr.</h1>
                    </div>
                    <h4>Vare nr.: {product.acf.varenr}</h4>
                    <p>{product.acf.description}</p>
                    <div className='sproduct-infobar-container'>
                        {category === "frost" ?
                            <div className='sicon-frost'>
                                <BsSnow />
                                <p>Frost</p>
                            </div> : null
                        }

                        {stockAmmount < 0 ?
                            <div className='sicon-lager'>
                                <TbTruck />
                                <p>På lager</p>
                            </div> :
                            <div className='sicon-lager'>
                                <TbTruckOff />
                                <p>Ikke på lager</p>
                            </div>
                        }
                    </div>
                    <button className='btn-1'>Tilføj kurv</button>
                    <div className="products-container">
                        {NavData.map(({ id, }, i) => (
                            <>
                                <div className="products-item" key={id} index={i}>
                                    <div className="products-title" onClick={() => toggle(i)}>
                                        <h4>Placeholder</h4>
                                        <div className='open'>{isVisible === i ? '-' : '+'}</div>
                                    </div>
                                    {isVisible === i &&
                                        <div className="products-content">
                                            <div className='products-header'>
                                                <h5>Hvidløg osv</h5>
                                                <h5>Hvidløg osv</h5>
                                                <h5>Hvidløg osv</h5>
                                            </div>
                                        </div>}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default SingleProductInfo