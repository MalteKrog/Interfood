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
            const responseProd = await fetch("https://interfood.mathiasqm.dk/wp-json/wp/v2/product?per_page=100");
            const data = await responseProd.json();
            console.log(data);
          setProducts(data);
        }
        getData();
    }, []);
    
    const {...product} = products
  return (
    <div className='background'>
          <div className='filters'>
                <h1>Frost</h1> 
                <p>Alle vores Frost varer</p>
                <div className='filter-buttons'>
                  <button className='btn-3 et'>Pris</button>
                  <button className='btn-3 to'>På Lager</button>
                  <button className='btn-3'>Alle Filtre</button>
                </div>
          </div>

      <div className='productPage'>
          {products.map((product, i) => (
            <ProductCard  data={product} key={product.id} product={product} i={i} />
          ))}
      <Kurv />
      </div>
    </div>
  )
}

export default ProductPage