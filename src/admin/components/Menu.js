import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {

    return (
        <React.Fragment>
             <div className="shopping-main">
                    <nav className="shopping-main__nav">
                        <ul className="shopping-main__list">
                            
                            {  
                                props.admin &&
                                <li className="shopping-main__item"> 
                                    <Link to="/admin" >
                                        <a href="" className="shopping-main__link--selected" >
                                            <span className="shopping-main__link--selected-number">1</span> 
                                           Orders
                                        </a>
                                    </Link>
                                </li>
                            }
                            {
                                (props.customers || props.products) &&
                                <li className="shopping-main__item"> 
                                    <Link to="/admin" className="shopping-main__link">
                                        <span className="shopping-main__link-number">1</span> 
                                        Orders
                                    </Link>
                                </li>
                            }
                            
                            
                            
                            { 
                                props.customers &&
                                <li className="shopping-main__item">
                                    <Link to="/customers" >
                                        <a href="" className="shopping-main__link--selected"> 
                                            <span className="shopping-main__link--selected-number">2</span>   
                                            Customers
                                        </a>
                                    </Link>
                                </li>
                            }
                            {
                                (props.products || props.admin) &&
                                <li className="shopping-main__item">
                                <Link to="/customers" className="shopping-main__link">
                                   
                                        <span className="shopping-main__link-number">2</span>   
                                        Customers
                                  
                                </Link>
                            </li>
                            }

                            {
                                props.products && 
                                <li className="shopping-main__item">
                                    <Link to="/admin-products" >
                                        <a href="" className="shopping-main__link--selected">
                                            <span className="shopping-main__link--selected-number">3</span> 
                                            Products
                                        </a>
                                    </Link>
                                </li>
                                
                            }

                            {
                                props.products && 
                                <li className="shopping-main__item">
                                    <Link className="shopping-main__link--selected" to="/new-product"  style={{
                                        backgroundColor: 'orangered', 
                                        color: 'white',
                                        height: '100%'
                                        }}>
                                      
                                            add new product
                                      
                                    </Link>
                                </li>
                                
                            }

                            {
                                (props.customers || props.admin) &&
                                <li className="shopping-main__item">
                                    <Link to="/admin-products"  className="shopping-main__link">
                                        
                                            <span className="shopping-main__link-number">3</span> 
                                            Products
                              
                                    </Link>
                                </li>
                            }
                            
                        </ul>
                    </nav>
                </div>  

        </React.Fragment>
    );
}

export default Menu;