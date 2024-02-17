import { NavLink } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import DrawerToggle from "./DrawerToggle";


function Header() {
	// const path = useLocation().pathname;
	const { isLoggedIn, logout } = useAuth();
	return (
		<div className="flex flex-row px-10  text-black dark:text-gray-100 items-center justify-center">
			<NavLink to="/" className="text-3xl font-extrabold">Saurav's BLOG</NavLink>
			<nav className=" text-xl flex-grow flex-row justify-end gap-10 hidden md:flex">
				<NavLink to="/" className="px-2 py-1 rounded-none navbar-hover-effect ">Posts</NavLink>
				{/* <NavLink to="/categories" className="px-2 py-1 rounded-none navbar-hover-effect ">Categories</NavLink> */}
				{isLoggedIn() ?
				<>	
					<NavLink to="/create-post" className="px-2 py-1 rounded-none navbar-hover-effect ">Create post</NavLink>
					<button className="navbar-hover-effect" onClick={logout}>Logout</button>
				</>
					:<>
					<NavLink to="/about" className="px-2 py-1 rounded-none navbar-hover-effect ">About</NavLink>
					<NavLink to="/login" className="px-2 py-1 rounded-none navbar-hover-effect ">Login</NavLink>
					</>
				}
			</nav>
				<DrawerToggle/>
				<hr />
		</div>
	)
}

export default Header