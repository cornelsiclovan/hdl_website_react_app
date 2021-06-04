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
                                             
                                           Pending Orders
                                        </a>
                                    </Link>
                                </li>
                            }
                            {
                                (props.rejected || props.processed) &&
                                <li className="shopping-main__item"> 
                                    <Link to="/admin" className="shopping-main__link">
                                       
                                       Pending Orders
                                    </Link>
                                </li>
                            }
                            
                            
                            
                            { 
                                props.processed &&
                                <li className="shopping-main__item">
                                    <Link to="/processed" >
                                        <a href="" className="shopping-main__link--selected"> 
                                            
                                            Processed Orders
                                        </a>
                                    </Link>
                                </li>
                            }
                            {
                                (props.admin || props.rejected) &&
                                <li className="shopping-main__item">
                                <Link to="/processed" className="shopping-main__link">
                                   
                                         
                                        Processed Orders
                                  
                                </Link>
                            </li>
                            }

                            {
                                props.rejected && 
                                <li className="shopping-main__item">
                                    <Link to="/rejected" >
                                        <a href="" className="shopping-main__link--selected">
                                           
                                            Rejected orders
                                        </a>
                                    </Link>
                                </li>
                            }

                            {
                                (props.processed || props.admin) &&
                                <li className="shopping-main__item">
                                    <Link to="/rejected"  className="shopping-main__link">
                                        
                                            
                                            Rejected orders
                              
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