import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {

    // Testdata
    const { isAuth } = useContext(AuthContext);

    return (
    <>
      <h1>Inloggen</h1>

        <div>{ `Kees zijn inlog is ${isAuth}`}</div>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>




      <form>
        <p>*invoervelden*</p>
        <button>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;