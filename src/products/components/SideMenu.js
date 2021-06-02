import React, { useEffect, useState }  from "react";
import { useHttpClient } from '../../shared/hooks/http-hook';

const SideMenu = (props) => {  
 
    return (
        
        <React.Fragment>
             <div className="side-menu">
                <br/> 
                <br/>
                <span className="side-menu__select--title">
                    { props.sideMenuName }
                </span>
                <br/>  
                <nav className="side-menu__nav">
                    <ul className="side-menu__list">

                        { props.loadedSideMenuItems && props.loadedSideMenuItems.map(
                            item => {
                                    return (
                                        <li className="side-menu__item">
                                        <a href="" data-letter={item._id} onClick={props.onSideMenuClickHandler} className="side-menu__link">{item.name}</a>
                                    </li>
                                    );
                                }
                            )     
                        }
                        
                    </ul>
                </nav>
                <br/>
                <br/>
                <span className="side-menu__select--title">
                    Status
                </span>
                <div className="side-menu__checkbox--container">
                    <label className="side-menu__checkbox">
                        Bestsellser
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="side-menu__checkbox">
                        New
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="side-menu__checkbox">
                        On sale 
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <br/>
                <span className="side-menu__select--title">
                    Availability
                </span>
                <label className="side-menu__checkbox">
                    Only on stock
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                </label>
                <br/>
            </div>
        </React.Fragment>
    );
};

export default SideMenu;