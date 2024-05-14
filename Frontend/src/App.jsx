import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import About from "./pages/About"
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/PrivateRoute"
import Dashboard from "./pages/Dashboard"
import CreatePost from "./pages/CreatePost"
import PostPage from "./pages/PostPage"
import Footer from "./components/Footer"

export default function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<div className="font-nunito bg-gray-200 dark:bg-black min-w-full min-h-svh flex flex-col pt-5 text-black dark:text-white">
					<Header />
					<div className="flex-grow flex justify-center items-center">
						<Routes>
							<Route path="/" element={<Home />} />
							{/* <Route path="categories" element={<Categories />} /> */}
							<Route path="about" element={<About />} />
							<Route path="register" element={<Register />} />
							<Route path="login" element={<Login />} />
							<Route element={<PrivateRoute/>}>
								<Route path="/dashboard" element={<Dashboard/>}/>
								<Route path="/create-post" element={<CreatePost/>}/>
							</Route>
							<Route path="/post/:postSlug" element={<PostPage/>}/>
							<Route path="/*" element={<NotFound />} />
						</Routes>
					</div>
					<Footer/>
				</div>
			</AuthProvider>
		</BrowserRouter>
	)
}