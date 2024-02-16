import { FormEvent, useState } from "react";
// import { NavLink } from "react-router-dom";
// import login from "../modules/login.ts";
import Modal from "../components/Modal";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
    const [modal, setModalProp] = useState({ title: "", message: "", success: true, visible: false })
    const [loading, setLoading] = useState(false)

    const {login} = useAuth();

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget 
        const formData = new FormData(form)

        const urlEncodedFormData = new URLSearchParams()
        for (const [key, value] of formData.entries()) urlEncodedFormData.append(key, value.toString())
        setLoading(true)
        const response = await login(urlEncodedFormData)
        setLoading(false)

        // if (response) { 

        // }
        setModalProp((v) => ({ ...v, visible: true, message: response.message, success: response.success }))
    }

    function toggleVisible() {
        setModalProp((v) => ({ ...v, visible: false }))
    }

    return (

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* <div className="input-group">
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" name="userName" minLength={6} placeholder="johndoe1123" />
                </div> */}
            <div className="input-group">
                {/* <label htmlFor="email">Email</label> */}
                <input type="email" id="email" name="email" required placeholder="Email" />
            </div>
            <div className="input-group">
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" id="Password" name="password" required placeholder="password" minLength={8} autoComplete="false" />
            </div>
            {/* <NavLink to="/register" className="self-end text-sm" >Create an account</NavLink> */}
            <button type="submit" title="Register" className="btn disabled:opacity-60" disabled={loading}>{loading ? "Requesting..." : "Login"}</button>
            <Modal text={modal.message} visible={modal.visible} success={modal.success} onPress={toggleVisible} />
        </form>
        // </div>
    )
}
