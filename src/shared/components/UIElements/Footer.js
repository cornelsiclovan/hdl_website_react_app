import React from 'react';

import blue_logo from '../../../img/hdl-logo-blue.png';


const Footer = () => {

    return (
        <React.Fragment>
            <footer class="footer">
                <div class="footer__logo-box">
                    <img src={blue_logo} alt="Full logo" class="footer__logo" />
                </div> 
                <div class="row">
                    <div class="col-1-of-2">
                        <div class="footer__navigation">
                            <ul class="footer__list">
                                <li class="footer__item">
                                    <a href="#" class="footer__link">Company</a>
                                </li>
                                <li class="footer__item">
                                    <a href="#" class="footer__link">Contact us</a>
                                </li>
                                <li class="footer__item">
                                    <a href="#" class="footer__link">Carrers</a>
                                </li>
                                <li class="footer__item">
                                    <a href="#" class="footer__link">Privacy policy</a>
                                </li>
                                <li class="footer__item">
                                    <a href="#" class="footer__link">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-1-of-2">
                        <p class="footer__copyright">
                            <a href="#" class="footer__link">Hdl automation</a> All rights reserved. Copyright &copy; Home Automation System
                        </p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
        );
};

export default Footer;