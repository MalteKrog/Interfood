import React, {useState, useEffect} from 'react'
import ProductCard from '../../Products/ProductCard'

const FeaturedProducts = ({post}) => {
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
    <article className='featured-products-container'>
        <h2>Featured Products</h2>
        <p>"These are some of our customers favorite products"</p>
        <div className='featured-products-cards'>
            {products.map((product, i) => (
                    i < 4 ?
            (<ProductCard  data={product} key={product.id} product={product} />) :null
            ))}
        </div>
      
                  
    </article>
  )
}

export default FeaturedProducts