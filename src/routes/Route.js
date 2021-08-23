import React ,{ useContex, useContext }from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/auth';
const RouteWrapper = ({
    component: Component,
    isPrivate,
    ...rest
}) => {

    const { signed, loading, user } = useContext(AuthContext);
    
    if (loading) {
        return (
            <div>
            </div>
        )
    }

    if (!signed && isPrivate) {
        return <Redirect to="/" />
    }

    if (signed && !isPrivate && user.tipo == "paciente") {
        console.log(user.tipo)
        return <Redirect to="/dashboard" />
    }
    
    
    return (
        <Route
            {...rest}
            render={props => (
                <Component {...props} />
            )}
        />
    )
}

export default RouteWrapper;