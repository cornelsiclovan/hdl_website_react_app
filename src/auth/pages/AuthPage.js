import React from 'react';
import Auth from '../../home/components/Auth';
import Header from '../../products/components/Header';
import Footer from '../../shared/components/UIElements/Footer';
import Navigation from '../../shared/components/UIElements/Navigation';


const AuthPage = (props) => {


    return (

        <React.Fragment>
            <Header />
            <Navigation />
            <Auth />
            <Footer />
        </React.Fragment>
    );
}

export default AuthPage;