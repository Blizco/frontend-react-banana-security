import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

function SignIn() {
    const {logInFunction} = useContext(AuthContext);
    const [emailAddress, setEmailAddress] = useState("");
    const [passWord, setPassWord] = useState("");

    return (
        <>
            <h1>Inloggen</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>


            <form>
                <section>
                    <label htmlFor = "email-address">Emailadres:</label>
                    <input
                    name="email"
                    id="email-address"
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    />
                </section>
                <section>
                    <label htmlFor = "pass-word">Wachtwoord:</label>
                    <input
                        name="password"
                        id="pass-word"
                        type="password"
                        value={passWord}
                        onChange={(e) => setPassWord(e.target.value)}
                    />
                </section>
                <button type="button"
                        onClick={logInFunction}
                >
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;