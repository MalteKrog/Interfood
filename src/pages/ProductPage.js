import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import ProductCard from '../components/Products/ProductCard'
import Kurv from '../components/Kurv/Kurv.js'


import '../components/Products/products.css'

const ProductPage = () => {
    // Wordpress headless CMS request
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function getData() {
            const responseProd = await fetch("https://interfood.mathiasqm.dk/wp-json/wp/v2/product?_embed&v=99999");
            const data = await responseProd.json();
            console.log(data);
          setProducts(data);
        }
        getData();
    }, []);
    
  return (
    <div className='productPage'>
        {products.map(product => (
          <ProductCard  key={product.id} product={product} />
        ))}
    <Kurv />
    </div>
  )
}

export default ProductPage