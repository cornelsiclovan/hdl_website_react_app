import { useState, useCallback, useEffect } from 'react';

let logoutTimer;

export const useAuth = () => {

    const [token, setToken] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
    const [userId, setUserId] = useState(false);
    const [discount, setDiscount] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);

    const login = useCallback((uid, token, discount, isAdmin, expirationDate) => {
        setUserId(uid);
        setToken(token);
        setDiscount(discount);
        setIsAdmin(isAdmin);

        const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 *60);
        setTokenExpirationDate(tokenExpirationDate);
        localStorage.setItem('userData', JSON.stringify({userId: uid, token: token, isAdmin: isAdmin, discount:discount, expiration: tokenExpirationDate.toISOString()}));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setTokenExpirationDate(null);
        setUserId(null);
        localStorage.removeItem('userData');
    }, []);

    useEffect(() => {
        if (token && tokenExpirationDate) {
            const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [token, logout, tokenExpirationDate]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));

        if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
            login(storedData.userId, storedData.token, storedData.isAdmin, storedData.discount, new Date(storedData.expiration));
        }
    }, [login]);

    return { token, login, logout, userId, discount, isAdmin };
}

