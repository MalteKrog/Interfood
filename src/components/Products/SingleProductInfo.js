import React from 'react';
import { BsSnow } from 'react-icons/bs';
import { TbTruck, TbTruckOff } from 'react-icons/tb';
import { CiStar } from 'react-icons/ci';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useState } from 'react';

import NavData from '../nav/NavData';

const SingleProductInfo = ({ showDialog, setShowDialog, product, i }) => {
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
                            <>
                                <div className="products-item" >
                                    <div className="products-title" onClick={() => {setIsVisible(1); toggle(i + 1);
                                        }}>
                                        <h4>{product.acf.indgredienser}</h4>
                                        <div className='open'>{isVisible === 1 ? '-' : '+'}</div>
                                    </div>
                                    {isVisible === i + 1 &&
                                        <div className="products-content">
                                            <div className='products-header'>
                                                <h5>{product.acf.Indgredienset}</h5>
                                                <h5>{product.acf.indgrediensto}</h5>
                                                <h5>{product.acf.indgredienstre}</h5>
                                            </div>
                                        </div>}

                                        <div className="products-title" onClick={() => toggle(i + 2)}>
                                        <h4>{product.acf.naeringsindhold}</h4>
                                        <div className='open'>{isVisible === 2 ? '-' : '+'}</div>
                                    </div>
                                    {isVisible === i + 2 &&
                                        <div className="products-content">
                                            <div className='products-header'>
                                                <h5>{product.acf.NaeringsIndhold1}</h5>
                                                <h5>{product.acf.NaeringsIndhold2}</h5>
                                                <h5>{product.acf.NaeringsIndhold3}</h5>
                                                <h5>{product.acf.NaeringsIndhold4}</h5>
                                                <h5>{product.acf.NaeringsIndhold5}</h5>
                                                <h5>{product.acf.NaeringsIndhold6}</h5>
                                                <h5>{product.acf.NaeringsIndhold7}</h5>
                                            </div>
                                        </div>}

                                        <div className="products-title" onClick={() => toggle(i + 3)}>
                                        <h4>{product.acf.produktdetaljer}</h4>
                                        <div className='open'>{isVisible === 3 ? '-' : '+'}</div>
                                    </div>
                                    {isVisible === i + 3 &&
                                        <div className="products-content">
                                            <div className='products-header'>
                                                <h5>{product.acf.oprindelsesland}</h5>
                                                <h5>{product.acf.nettomaengde}</h5>
                                                <h5>{product.acf.produkttype}</h5>
                                                <h5>{product.acf.opbevares}</h5>
                                                <h5>{product.acf.bedstfor}</h5>
                                            </div>
                                        </div>}
                                </div>
                            </>
                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default SingleProductInfo