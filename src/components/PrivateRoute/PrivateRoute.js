import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from "react-router-dom";
import { LoggedInUserContext } from "./../../App";

const PrivateRoute = ({children, rest}) => {
    const [loggedInUser] = useContext(LoggedInUserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;