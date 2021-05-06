import React, { useEffect, useState }  from "react";
import { useHttpClient } from '../../shared/hooks/http-hook';

const SideMenu = (props) => {  
 
    return (
        
        <React.Fragment>
             <div class="side-menu">
                <br/> 
                <br/>
                <span class="side-menu__select--title">
                    Buspro
                </span>
                <br/>  
                <nav class="side-menu__nav">
                    <ul class="side-menu__list">

                        { props.loadedSideMenuItems && props.loadedSideMenuItems.map(
                            item => {
                                    return (
                                        <li class="side-menu__item">
                                        <a href="#" class="side-menu__link">{item.name}</a>
                                    </li>
                                    );
                                }
                            )     
                        }
                        



                        {/* <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Relay actuators</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Dimmers</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Dimmers led</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">DALI Actuators</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">DMX Actuators</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">User interfaces</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Sensors</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Shading systems</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Hotel system</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">HVAC</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Dry Contact inputs</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">IR Control</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Audio Systems</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Security System</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Communication Gateways</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">System modules</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Power metering</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Cables & accessories</a>
                        </li>
                        <li class="side-menu__item">
                            <a href="#" class="side-menu__link">Powe Supply</a>
                        </li> */}
                    </ul>
                </nav>
                <br/>
                <br/>
                <span class="side-menu__select--title">
                    Status
                </span>
                <div class="side-menu__checkbox--container">
                    <label class="side-menu__checkbox">
                        Bestsellser
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="side-menu__checkbox">
                        New
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="side-menu__checkbox">
                        On sale 
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <br/>
                <span class="side-menu__select--title">
                    Availability
                </span>
                <label class="side-menu__checkbox">
                    Only on stock
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <br/>
            </div>
        </React.Fragment>
    );
};

export default SideMenu;