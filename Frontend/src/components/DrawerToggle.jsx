import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function DrawerToggle() {
    const {isLoggedIn} = useAuth()
    const [isDrawerOpen, setISDrawerOpen] = useState(false)
    const toggleDrawer = () => {
        setISDrawerOpen(previousState => !previousState)
    }
    return (
        <div className="md:hidden flex-grow flex flex-row justify-end">
            <button
                onClick={toggleDrawer}
                className='block px-2 active:scale-110 transition bg-white rounded-sm'
            >
                <svg height="32" width="24" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </button>
            <Drawer
                className='flex'
                open={isDrawerOpen}
                onClose={toggleDrawer}
                direction='left'
                lockBackgroundScroll='true'
            >
                <div className='flex flex-col grow justify-center pl-8 space-y-2 align-middle text-lg bg-light dark:bg-slate-900' >
                    <NavLink to="/" className="px-2 py-1 rounded-none navbar-hover-effect ">Posts</NavLink>
                    <NavLink to="/about" className="px-2 py-1 rounded-none navbar-hover-effect ">About</NavLink>
                    {/* <NavLink to="/categories" className="px-2 py-1 rounded-none navbar-hover-effect ">Categories</NavLink> */}
                    {isLoggedIn() ?
                        <button className="navbar-hover-effect" onClick={logout}>Logout</button>
                        :
                        <NavLink to="/login" className="px-2 py-1 rounded-none navbar-hover-effect ">Login</NavLink>
                    }
                </div>

            </Drawer>
        </div>
    )
}

export default DrawerToggle