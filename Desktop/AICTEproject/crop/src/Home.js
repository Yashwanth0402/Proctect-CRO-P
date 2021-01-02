import React from 'react';
import"./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className='home'>
           <div className="home_container">
               <img 
                  className="home_image"
                  src="./images/products.jpg" alt="products"/>

            <div className="home_row">
                
                <Product id="4939248" title='Hand made Baskets' price={142} image='./images/handicraft1.jpg'/>
                <Product id="23414342" title='clay decorated handicrafts' price={142} image='./images/handicraft2.jpg' />
                 
            </div>

            <div className="home_row">
                 <Product 
                 title='organic pesticides with 500 mg manure'
                 price={142} 
                 image='./images/product1.jpg'
                 /> 
                <Product id="324354345" title='Alankari Art handicrafts' price={142} image='./images/handicraft3.jpg'/>
            </div>
            
           </div>
        </div>
    )
}

export default Home
