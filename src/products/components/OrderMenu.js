import React from 'react';

const OrderMenu = () => {

    return (
        <React.Fragment>
            <div className="order-menu">
                <nav className="order-menu__nav">
                    <ul className="order-menu__list">
                        <li className="order-menu__item">
                            <a href="#" className="order-menu__link" ><b>Order by:</b></a>
                        </li>
                        <li className="order-menu__item">
                            <a href="#" className="order-menu__link">TOP</a>
                        </li>
                        <li className="order-menu__item">
                            <a href="#" className="order-menu__link">Price Asc.</a>
                        </li>
                        <li className="order-menu__item">
                            <a href="#" className="order-menu__link">Price Desc.</a>
                        </li>
                        <li className="order-menu__item">
                            <a href="#" className="order-menu__link">Name</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default OrderMenu;