import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const history = useHistory();
    const {isAuthorized, logOutFunction} = useContext(AuthContext);

    console.log(`isAuthorized is: ${isAuthorized}`);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>
            {/*Afhankelijk van status verschillende buttons laten zien*/}
            <div>
                {isAuthorized
                    // Alleen "Log uit" button laten zien wanneer true
                    ? <div>
                        <button
                            type="button"
                            onClick={logOutFunction}
                        >
                            Log uit
                        </button>
                    </div>
                    // "Log in" en "Registreren" buttons laten zien wanneer false
                    : <div>
                        <button
                            type="button"
                            onClick={() => history.push('/signin')}
                        >
                            Log in
                        </button>
                        <button
                            type="button"
                            onClick={() => history.push('/signup')}
                        >
                            Registreren
                        </button>
                    </div>}
            </div>
        </nav>
    );
}

export default NavBar;