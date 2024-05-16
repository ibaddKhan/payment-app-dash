import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from '../../screens/home/home'
import Profile from '../../screens/profile/profile'
import Login from '../../screens/login/login'
import Forget from '../../screens/forget/forget'
import Navbar from '../../components/Navbar'

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={< Dashboard />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/ForgetPassword' element={<Forget />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default Routers