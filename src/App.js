import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Account from './account/pages/Account.js';
import ChangePassword from './account/pages/ChangePassword.js';
import OrderHistory from './account/pages/OrderHistory.js';
import AuthPage from './auth/pages/AuthPage.js';
import Home from './home/pages/Home';
import Products from './products/pages/Products';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

import Billing from './shopping-cart/pages/Billing';
import Review from './shopping-cart/pages/Review';
import ShoppingCart from './shopping-cart/pages/ShoppingCart';

const App = () => {
    const { token, login, logout, userId } = useAuth();
    let routes;

    if(token) {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products" exact>
                    <Products />
                </Route>
                <Route path="/shopping-cart" exact>
                    <ShoppingCart />
                </Route>
                <Route path="/billing" exact>
                    <Billing />
                </Route>
                <Route path="/review_payment" exact>
                    <Review />
                </Route>
                <Route path="/account" exact>
                    <Account />
                </Route>
                <Route path="/order-history" exact>
                    <OrderHistory />
                </Route>
                <Route path="/change-password" exact>
                    <ChangePassword />
                </Route>
                <Redirect to="/products" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products" exact>
                <Products />
            </Route>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Route path="/shopping-cart" exact>
                <AuthPage />
            </Route>
            <Route path="/billing" exact>
                <AuthPage />
            </Route>
            <Route path="/review_payment" exact>
                <AuthPage />
            </Route>
            <Route path="/account" exact>
                <AuthPage />
            </Route>
            <Route path="/order-history" exact>
                <AuthPage />
            </Route>
            <Route path="/change-password" exact>
                <AuthPage />
            </Route>
        </Switch>
        );
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token, 
                token: token,
                userId: userId,
                login: login,
                logout: logout 
            }}
        >
            <Router>
                <main>
                    {routes}
                </main>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;