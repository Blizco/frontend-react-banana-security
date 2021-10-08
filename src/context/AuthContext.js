import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';


// 1. Context maken
export const AuthContext = createContext([]);

// 2. Custom Provider-component
// 3. Wikkel AuthContext om de <App /s in index.js

function AuthContextProvider({ children }) {
    const history = useHistory();
    // 5. State bouwen
    const [isAuth, toggleIsAuth] = useState(false);

    // 6. Functies maken
    function logIn () {
        toggleIsAuth(true);
        console.log('Gebruiker is ingelogd!');
        history.push('/profile');
    }

    function logOut () {
        toggleIsAuth(false);
        console.log('Gebruiker is uitgelogd!');
        history.push('/');
    }

    // 4. Data maken die voor iedereen beschikbaar is
    const contextData = {
        isAuthorized: isAuth,
        logInFunction: logIn,
        logOutFunction: logOut,
    }

    return (
        <AuthContext.Provider value={ contextData }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;