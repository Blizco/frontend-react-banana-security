import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';


// 1. Context maken
export const AuthContext = createContext([]);

// 2. Custom Provider-component
// 3. Wikkel AuthContext om de <App /s in index.js

function AuthContextProvider({ children }) {
    const history = useHistory();
    // 5. State bouwen
    // const [isAuth, toggleIsAuth] = useState(false);
    // const [user, setUser] = useState("");

    // Nu met object ipv boolean (Bonus 2)
    const [isAuth, toggleIsAuth] = useState({ isAuth: false, user: '' });

    // 6. Functies maken
    function logIn (userName) {
        // toggleIsAuth(true);

        // Nu met object ipv boolean (Bonus 2)
        // Spread-operator nodig om de previuos state values vast te houden
        toggleIsAuth({ ...isAuth, isAuth: true, user: userName});
        console.log('Gebruiker is ingelogd!');
        history.push('/profile');
    }

    function logOut () {
        // toggleIsAuth(false);

        // Nu met object ipv boolean (Bonus 2)
        // Spread-operator nodig om de previuos state values vast te houden
        toggleIsAuth({...isAuth, isAuth: false });
        console.log('Gebruiker is uitgelogd!');
        history.push('/');
    }

    // 4. Data maken die voor iedereen beschikbaar is
    const contextData = {
        // isAuthorized: isAuth,

        // Nu met object ipv boolean (Bonus 2)
        logInFunction: logIn,
        logOutFunction: logOut,
        isAuthorized: isAuth,
        userName: isAuth.user,

    }

    return (
        <AuthContext.Provider value={ contextData }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;