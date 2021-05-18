import React from 'react';


const ReviewMain = (props) => {

    return (
        <React.Fragment>
             <div class="continue-shopping"> 

                <h1 style={{color: "black"}}>Billing details</h1>
                </div>

                <div class="section-cart">
                <div class="section-cart__left">
                Bogdan Dragoi
                <br/>
                bogdandr@gmail.com
                <br/>
                0721312535
                <br/>
                <br/>
                Home Automation Systems
                <br/>
                Org. ID: RO32273009
                <br/>
                DIC: J35/2393/2013
                <br/>
                <br/>
                Str. Frasinului Nr.33
                <br/>
                307287 Mosnita Veche
                <br/>
                Romania
                <div class="continue-shopping" style={{marginLeft: -15+"px"}}>  

                    <h1 style={{color: "black"}}>Orderd items</h1>
                </div>
                
                </div>
               
            </div>
        </React.Fragment>
    );
}

export default ReviewMain;