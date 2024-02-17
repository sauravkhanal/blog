import { NavLink, useLocation } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function Header() {
	// const path = useLocation().pathname;
	const { isLoggedIn, logout } = useAuth();
	return (
		<nav className="flex px-10  text-black dark:text-gray-100 ">
			<p className="text-3xl font-extrabold">Saurav's BLOG</p>
			<nav className=" text-xl flex-grow flex-row flex justify-end gap-10 ">
				<NavLink to="/" className="px-2 py-1 rounded-none navbar-hover-effect ">Posts</NavLink>
				<NavLink to="/about" className="px-2 py-1 rounded-none navbar-hover-effect ">About</NavLink>
				<NavLink to="/categories" className="px-2 py-1 rounded-none navbar-hover-effect ">Categories</NavLink>
				{isLoggedIn() ?
					<button className="navbar-hover-effect" onClick={logout}>Logout</button>
					:
					<NavLink to="/login" className="px-2 py-1 rounded-none navbar-hover-effect ">Login</NavLink>
				}
			</nav>
		</nav>
	)
}

export default Header