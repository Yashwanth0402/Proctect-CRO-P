import React from 'react'
import "./Fertilizers.css";
import Product from './Product';

function Fertilizers() {
    return (
        <div className="home">
            <div className="home_container">
           <div className="home_row">
                <Product id="4939248" title='Hand made Baskets' price={142} image='./images/handicraft1.jpg'/>
                <Product id="23414342" title='clay decorated handicrafts' price={142} image='./images/handicraft2.jpg' />
                <Product id="324354345" title='Alankari Art handicrafts' price={142} image='./images/handicraft3.jpg'/>
            </div>

            <div className="home_row">
                 <Product 
                 title='organic pesticides with 500 mg manure'
                 price={142} 
                 image='./images/product1.jpg'
                 /> 
                
            </div>
            <div className="home_row">
                 <Product 
                 id="12321341"
                 title='organic pesticides with 500 mg manure' 
                 price={142} 
                 image='./images/product1.jpg' /> 
                 <Product 
                 id="49538094"
                 title='organic pesticides with 500 mg manure'
                 price={142} 
                 image='./images/product2.jpg' />
                 <Product 
                 id="523434143"
                 title='organic pesticides with 500 mg manure' 
                 price={142} 
                 image='./images/product3.jpg'/>
            </div> 
            </div>
        </div>
    )
}

export default Fertilizers
