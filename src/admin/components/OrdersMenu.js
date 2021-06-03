import React from 'react';
import { Link } from 'react-router-dom';

const OrderMenu = (props) => {

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
                                             
                                           All Orders
                                        </a>
                                    </Link>
                                </li>
                            }
                            {
                                (props.customers || props.products) &&
                                <li className="shopping-main__item"> 
                                    <Link to="/admin" className="shopping-main__link">
                                       
                                        All Orders
                                    </Link>
                                </li>
                            }
                            
                            
                            
                            { 
                                props.customers &&
                                <li className="shopping-main__item">
                                    <Link to="/customers" >
                                        <a href="" className="shopping-main__link--selected"> 
                                            
                                            Processed Orders
                                        </a>
                                    </Link>
                                </li>
                            }
                            {
                                (props.products || props.admin) &&
                                <li className="shopping-main__item">
                                <Link to="/customers" className="shopping-main__link">
                                   
                                         
                                        Processed Orders
                                  
                                </Link>
                            </li>
                            }

                            {
                                props.products && 
                                <li className="shopping-main__item">
                                    <Link to="/admin-products" >
                                        <a href="" className="shopping-main__link--selected">
                                           
                                            Pending Orders
                                        </a>
                                    </Link>
                                </li>
                            }

                            {
                                (props.customers || props.admin) &&
                                <li className="shopping-main__item">
                                    <Link to="/admin-products"  className="shopping-main__link">
                                        
                                            
                                            Pending Orders
                              
                                    </Link>
                                </li>
                            }
                            
                        </ul>
                    </nav>
                </div>  

        </React.Fragment>
        );
}

export default OrderMenu;