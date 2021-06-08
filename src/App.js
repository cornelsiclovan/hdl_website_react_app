import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Account from './account/pages/Account.js';
import ChangePassword from './account/pages/ChangePassword.js';
import OrderHistory from './account/pages/OrderHistory.js';
import AuthPage from './auth/pages/AuthPage.js';
import Home from './home/pages/Home';
import Products from './products/pages/Products';
import Admin from './admin/pages/Admin';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

import Billing from './shopping-cart/pages/Billing';
import Review from './shopping-cart/pages/Review';
import ShoppingCart from './shopping-cart/pages/ShoppingCart';
import Customers from './admin/pages/Customers.js';
import AdminProducts from './admin/pages/AdminProducts.js';
import Processed from './admin/pages/Processed.js';
import Rejected from './admin/pages/Rejected.js';
import ModifyOrder from './admin/pages/ModifyOrder'
import Discount from './admin/pages/Discount.js';

const App = () => {
    const { token, login, logout, userId, isAdmin, discount } = useAuth();
    let routes;

    if(token && !isAdmin) {
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
                {/* <Route path="/admin" exact>
                    <Admin />
                </Route> */}
                {/* <Route path="/admin-products" exact>
                    <AdminProducts />
                </Route>
                <Route path="/customers" exact>
                    <Customers />
                </Route>
                <Route path="/processed" exact>
                    <Processed />
                </Route>
                <Route path="/rejected" exact>
                    <Rejected />
                </Route>
                <Route path="/modify-order/:orderId" exact>
                    <ModifyOrder />
                </Route> */}
                <Redirect to="/products" />
            </Switch>
        );
    } else if (token && isAdmin){
         routes = (<Switch>
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
                <Route path="/admin" exact>
                    <Admin />
                </Route>
                <Route path="/admin-products" exact>
                    <AdminProducts />
                </Route>
                <Route path="/customers" exact>
                    <Customers />
                </Route>
                <Route path="/processed" exact>
                    <Processed />
                </Route>
                <Route path="/rejected" exact>
                    <Rejected />
                </Route>
                <Route path="/modify-order/:orderId" exact>
                    <ModifyOrder />
                </Route>
                <Route path="/discount/:customerId" exact>
                    <Discount />
                </Route>
                <Redirect to="/products" />
            </Switch>)
    }else {
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
            <Route path="/admin" exact>
                <AuthPage />
            </Route>
            <Route path="/admin-products" exact>
                <AuthPage />
            </Route>
            <Route path="/processed" exact>
                <AuthPage />
            </Route>
            <Route path="/rejected" exact>
                <AuthPage />
            </Route>
            <Route path="/customers" exact>
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
                isAdmin: isAdmin,
                discount: discount,
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