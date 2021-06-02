import React, { useEffect, useState }  from "react";
import { useHttpClient } from '../../shared/hooks/http-hook';

const MainMenu = (props) => {
    const [loadedMainMenuItems, setLoadedMainMenuItems] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    useEffect(() => {
        const fetchMainMenuItems = async () => {
        
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/categories`);

                setLoadedMainMenuItems(responseData);
            } catch (err) {}
        };

        fetchMainMenuItems();
    }, [sendRequest]);

    // const onMainMenuClickHandler = async (e) => {
    //     console.log(e.target.dataset.letter);
    // } 
 
    return (
        <React.Fragment>
             <div className="main-menu">
                <nav className="main-menu__nav">
                    <ul className="main-menu__list">
                    { !isLoading && loadedMainMenuItems && loadedMainMenuItems.map(
                                mainMenuItem => {
                                    return (
                                        <li className="main-menu__item">
                                            <a href="" data-letter={mainMenuItem._id} onClick={props.onMainMenuClickHandler} class="main-menu__link">
                                                {mainMenuItem.name}
                                            </a> 
                                        </li>
                                    );     
                                }
                            ) }
                    </ul>
                </nav>
                
                <div className="select-menus">
                    <div className="main-menu__select">
                        <select>
                            <option value="0">Select option</option>
                            <option value="1">Bus pro</option>
                            <option value="2">knx</option>
                            <option value="3">Buspro wireless</option>
                            <option value="4">Others</option>
                            <option value="5">Sockets</option>
                            <option value="6">Wall brakets</option>
                            <option value="7">IQRC</option>
                            
                        </select> 

                        <div className="main-menu__selected">
                            Buspro wireless 
                        </div>
                    </div>

                    <div className="side-menu__select">
                  

                        <select>
                            <option value="0">Relay actuators</option>
                            <option value="1">Dimmers</option>
                            <option value="2">Dimmers led</option>
                            <option value="3">DALI Actuators</option>
                            <option value="4">DMX Actuators</option>
                            <option value="5">User interfaces</option>
                            <option value="6">Sensors</option>
                            <option value="7">Shading systems</option>
                            <option value="4">Hotel system</option>
                            <option value="5">HVAC</option>
                            <option value="6">Dry Contact inputs</option>
                            <option value="7">IR Control</option>
                            <option value="4">Audio Systems</option>
                            <option value="5">Security System</option>
                            <option value="6">Communication Gateways</option>
                            <option value="7">System modules</option>
                            <option value="5">Power metering</option>
                            <option value="6">Cables & accessories</option>
                            <option value="7">Powe Supply</option>
                            
                        </select> 

                        <div className="side-menu__selected">
                            Communication Gateways 
                        </div>
                    </div>  
                </div>
            </div>
        </React.Fragment>
    );
};


export default MainMenu;