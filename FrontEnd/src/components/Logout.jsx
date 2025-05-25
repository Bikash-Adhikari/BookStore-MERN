import React from 'react'
import { useAuth } from '../contexts/AuthProvider'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate()
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("users")
            toast.success('Logged out successfully.')
            setTimeout(() => {
                navigate('/')
                window.location.reload()
            }, 1000);

        } catch (error) {
            toast.error('Error:' + error.message)
            setTimeout(() => { }, 2000)
        }
    }

    return (
        <div className="active:scale-110 duration-300">
            <a className="bg-white text-black dark:bg-blue-950 dark:text-white border border-blue-900  px-3 py-2 rounded-md hover:bg-blue-800 hover:text-white duration-300 cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </a>
        </div>
    )
}

export default Logout
