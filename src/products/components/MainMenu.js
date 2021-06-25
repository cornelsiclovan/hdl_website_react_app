import React, { useEffect, useState }  from "react";
import { useHttpClient } from '../../shared/hooks/http-hook';

const MainMenu = (props) => {
    const [loadedMainMenuItems, setLoadedMainMenuItems] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const [mainMenuHeight, setMainMenuHeight] = useState('7');
    const [mainMenuVisibility, setMainMenuVisibility] = useState('hidden');

    const [sideMenuHeight, setSideMenuHeight] = useState('7');
    const [sideMenuVisibility, setSideMenuVisibility] = useState('hidden');
    
    const [selectedMainMenuItem, setSelectedMainMenuItem] = useState();
    const [selectedSideMenuItem, setSelectedSideMenuItem] = useState();

    useEffect(() => {
        const fetchMainMenuItems = async () => {
        
            try {
                const responseData = await sendRequest(`http://localhost:3001/api/categories`);

                setLoadedMainMenuItems(responseData);
                
                setSelectedMainMenuItem(responseData[0]);
                
            } catch (err) {}
        };

        fetchMainMenuItems();
    }, [sendRequest]);



    const onClickSelectMenu = () => {
        if(mainMenuHeight === '7rem'){
            setMainMenuVisibility('')
            setMainMenuHeight('55rem');
        } else { 
            setMainMenuHeight('7rem')    
            setMainMenuVisibility('hidden')
        }
    }

    const onClickSideMenu = () => {
        if(sideMenuHeight === '7rem') {
            setSideMenuVisibility('');
            setSideMenuHeight('100rem');
        } else {
            setSideMenuHeight('7rem');
            setSideMenuVisibility('hidden');
        }
    }


 
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

                        <div className="main-menu__selected" style={{height: mainMenuHeight}} onClick={onClickSelectMenu}>
                        { !isLoading && selectedMainMenuItem && <div><a href="" data-letter={loadedMainMenuItems[0]._id} onClick={props.onMainMenuClickHandler} class="main-menu__link">
                                            {selectedMainMenuItem.name}
                                        </a><br /></div>}

                        { !isLoading && selectedMainMenuItem && loadedMainMenuItems && loadedMainMenuItems.map(
                                mainMenuItem => {
                                    if(mainMenuItem.name !== selectedMainMenuItem.name)
                                    return (<div>
                                        <a href="" style={{visibility: mainMenuVisibility}} data-letter={mainMenuItem._id} onClick={props.onMainMenuClickHandler} class="main-menu__link">
                                            {mainMenuItem.name}
                                        </a><br/> </div>
                                    );     
                                }
                            ) }
                        </div>
                    </div>

                    {/* <div className="side-menu__select">
                        <div className="side-menu__selected" style={{height: sideMenuHeight}} onClick={onClickSideMenu}>
                        { !isLoading && selectedSideMenuItem && <div><a href="" data-letter={loadedMainMenuItems[0]._id} onClick={props.onMainMenuClickHandler} class="main-menu__link">
                                            {selectedSideMenuItem.name}
                                        </a><br /></div>}
                       
                        { !isLoading && props.loadedSideMenuItems && props.loadedSideMenuItems.map(
                                mainMenuItem => {
                                    return (
                                        <a href=""  style={{visibility: sideMenuVisibility, marginBottom: '4px', color: 'darkgray'}} data-letter={mainMenuItem._id} onClick={props.onSideMenuClickHandler} class="main-menu__link">
                                            {mainMenuItem.name}
                                        </a> 
                                    );     
                                }
                            ) }
                        </div>
                    </div>   */}
                </div>
            </div>
        </React.Fragment>
    );
};


export default MainMenu;