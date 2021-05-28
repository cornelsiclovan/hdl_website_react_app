import React from 'react';

import blue_logo from '../../../img/hdl-logo-blue.png';


const Footer = () => {

    return (
        <React.Fragment>
            <footer className="footer">
                <div className="footer__logo-box">
                    <img src={blue_logo} alt="Full logo" className="footer__logo" />
                </div> 
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Company</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Contact us</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Carrers</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Privacy policy</a>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__link">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright">
                            <a href="#" className="footer__link">Hdl automation</a> All rights reserved. Copyright &copy; Home Automation System
                        </p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
        );
};

export default Footer;