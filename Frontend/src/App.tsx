import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import About from "./pages/About"
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import Login from "./pages/Login"


export default function App() {
	return (
		<BrowserRouter>
			<div className="font-nunito bg-gray-200 dark:bg-black min-w-full min-h-svh flex flex-col pt-5 text-yellow-500">
				<Header />
				<div className="flex-grow flex justify-center items-center">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="categories" element={<Categories />} />
						<Route path="about" element={<About />} />
						<Route path="register" element={<Register />} />
						<Route path="login" element={<Login />} />
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}