import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthProvider';

const PrivateRoute = (children) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {loading, user} = useContext(AuthContext)
    if (loading) {
        return <button className="btn loading">loading</button>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;