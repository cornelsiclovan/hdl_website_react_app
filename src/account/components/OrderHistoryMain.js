import React from 'react';
import OrderHistoryItem from './OrderHistoryItem';


const OrderHistoryMain = (props) => {

    console.log(props.orders);

    return(
        <React.Fragment>
            <div class="continue-shopping"> 
                 
                 <h1 style={{color: 'black'}}>Order history</h1>
             </div>
 
             
          
                <ul class="section-cart__left--list">
                 <li class="section-cart__left--item">
                     
                        
                     <div class="section-cart__left--item-col">
                            <a href>Order id &#8593;</a>   
                     </div>
                     
                     <div class="section-cart__left--item-col">
 
                         <a href>Order date &#8593;</a>   
                     </div> 
                    
                     <div class="section-cart__left--item-col">
                         <a href>Total price &#8595;</a>  
                    </div>
                 </li>
                 { 
                    props.orders && props.orders.orders.map(order => {
                        return <OrderHistoryItem order={order}/>
                    })
                    
                    
                    }
             </ul>
             
            <br/>
            <br/>
        </React.Fragment>
    );
}

export default OrderHistoryMain;