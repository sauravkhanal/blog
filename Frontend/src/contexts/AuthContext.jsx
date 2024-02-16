import { useState, useContext, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import config from '../config';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setUserToken] = useState(null);
    const navigate = useNavigate();

    const login = async (formData) => {

        try {

            const controller = new AbortController();
            const signal = controller.signal;

            const timer = setTimeout(() => {
                controller.abort();
            }, 30000)

            const res = await fetch(config.LOGIN_API_ENDPOINT, {
                method: "POST",
                body: formData.toString(),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                signal: signal
            });

            clearTimeout(timer)
            const responseData = await res.json();

            setUser({userId: responseData.data.userId, userName: responseData.data.userName})
            setUserToken(token)
            localStorage.setItem("site", res.token)
            navigate("/dashboard")
            return true;

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
        setUser(null);
        setUserToken(null);
        localStorage.removeItem("site")
        navigate("/home")
    }
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}


export const useAuth = () => {
    return useContext(AuthContext)
}