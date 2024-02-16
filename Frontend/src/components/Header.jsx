import { NavLink, useLocation } from "react-router-dom"

function Header() {
	const path = useLocation().pathname;
	return (
		<nav className="flex px-10  text-black dark:text-gray-100 ">
			<p className="text-3xl font-extrabold">BLOG</p>
			<nav className=" text-xl flex-grow flex-row flex justify-end gap-10 ">
				<NavLink to="/" className="px-2 py-1 rounded-none navbar-hover-effect ">Home</NavLink>
				<NavLink to="/about" className="px-2 py-1 rounded-none navbar-hover-effect ">About</NavLink>
				<NavLink to="/categories" className="px-2 py-1 rounded-none navbar-hover-effect ">Categories</NavLink>
				{/* <NavLink to="/register" className="px-2 py-1 rounded-none navbar-hover-effect ">Register</NavLink> */}
				<NavLink to="/login" className="px-2 py-1 rounded-none navbar-hover-effect ">Login</NavLink>
			</nav>
		</nav>
	)
}

export default Header