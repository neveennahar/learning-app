import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { MyContext } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(MyContext);

    const location = useLocation();
    if (loading) {
        return <div className='h-[50vh] flex items-center'><div className="mx-auto w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-600"></div></div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    }
    return children;

};

export default PrivateRoute;