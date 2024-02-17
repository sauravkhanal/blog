import { useState, useContext, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import config from '../config';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [userId, setUserName] = useState(null);
    // const [token, setUserToken] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     async function checkToken() {
    //         const token = localStorage.getItem("token")
    //         if (token) {
    //             console.log("useEffect*******************************************************")
    //             setUserToken(token)
    //             const userId = localStorage.getItem("userId")
    //             setUserName(userId)
    //             console.log(token, userId)
    //             // navigate('/dashboard')
    //         }
    //     }
    //     checkToken()
    // }, [])

    const login = async (formData) => {

        try {

            const controller = new AbortController();
            const signal = controller.signal;

            const timer = setTimeout(() => {
                controller.abort();
            }, 30000)

            const res = await fetch("/api/v1/auth/login", {
                method: "POST",
                body: formData.toString(),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                signal: signal
            });

            clearTimeout(timer)
            const responseData = await res.json();

            if (responseData.success) {
                // console.log(responseData)
                // setUserName({ userId: responseData.data.userId, userId: responseData.data.userId })
                // setUserToken(responseData.data.accessToken)
                localStorage.setItem("token", responseData.data.accessToken)
                localStorage.setItem("userId", responseData.data.userId)
                navigate("/create-post")
            }

            return responseData

        } catch (error) {
            if (error.name === "AbortError") {
                alert('Timeout: Form submission timed out. Please try again later')
                return false;
            }
            console.error("Error registering:", error);
            alert("Oops! : An error occurred while Logging in.");
            return false;
        }
    }


    const logout = () => {
        // setUserName(null);
        // setUserToken(null);
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        navigate("/")
    }

    const isLoggedIn = () => Boolean(localStorage.getItem("token"))
    const getUserId = () => localStorage.getItem("userId")

    return <AuthContext.Provider value={{ getUserId, isLoggedIn , login, logout }}>{children}</AuthContext.Provider>
}


export const useAuth = () => useContext(AuthContext);