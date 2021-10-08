
import React, { createContext, useState } from 'react';

// 1. Context maken
export const AuthContext = createContext([]);

// 2. Custom Provider-component
// 3. Wikkel AuthContext om de <App /s in index.js

function AuthContextProvider({ children }) {
    // 5. State bouwen
    const [isAuthorized, toggleIsAuthorized] = useState(false);

    // 4. Data maken die voor idereen beschikbaar is
    const contextData = {
        isAuth: isAuthorized,
    }

    return (
        <AuthContext.Provider value={ contextData }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;