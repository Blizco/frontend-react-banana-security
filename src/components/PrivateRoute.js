import React from 'react';
import { Redirect, Route } from 'react-router-dom';


function PrivateRoute({ isAuth, children, ...rest }) {
    return (
        <Route {...rest}>
            {!isAuth ? children : <Redirect to="/"/>}
        </Route>
    );
}

export default PrivateRoute;

// Nu met object ipv boolean (Bonus 2)
// function PrivateRoute({ isAuthorizedUser, children, ...rest }) {
//     // const { isAuthorizedUser } = useContext(AuthContext);
//     return (
//         <Route {...rest}>
//             {!isAuthorizedUser.isAuth ? children : <Redirect to="/"/>}
//         </Route>
//     );
// }

// export default PrivateRoute;