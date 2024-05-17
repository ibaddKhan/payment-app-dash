import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from '../../screens/home/home';
import Navbar from '../../components/Navbar';
import Login from '../../screens/login/login';
import ForgetPassword from '../../screens/forget/forget';

const Routers = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <BrowserRouter>
            {isAuthenticated && <Navbar />}
            <Routes>
                <Route
                    path='/login'
                    element={
                        isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />
                    }
                />
                {isAuthenticated ? (
                    <Route path='/' element={<Navigate to="/dashboard" />} />
                ) : (
                    null
                )}
                {isAuthenticated ? (
                    <Route path='/dashboard' element={<Dashboard />} />
                ) : (
                    <Route path='/dashboard' element={<Navigate to="/login" />} />
                )}
                {isAuthenticated ? (
                    <Route path='/login' element={<Navigate to="/dashboard" />} />
                ) : (
                    <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                )}
                {!isAuthenticated && <Route path='/forgetPassword' element={<ForgetPassword />} />}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
