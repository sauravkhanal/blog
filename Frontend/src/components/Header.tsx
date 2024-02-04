function Header() {
  return (
    <div className="flex px-10  text-black dark:text-gray-100 ">
        <p className="text-3xl font-extrabold">BLOG</p>
        <nav className=" text-xl flex-grow flex justify-end gap-10 ">
            <a href="#" className=" px-2 py-1 rounded-none navbar-hover-effect ">About</a>
            <a href="#" className="px-2 py-1 rounded-none navbar-hover-effect">Categories</a>
            <a href="#" className="px-2 py-1 rounded-none navbar-hover-effect">Item</a>
        </nav>
    </div>
  )
}

export default Header