import { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userRegister from "../modules/Register.ts";
import Modal from "../components/Modal";

export default function Register() {
    const [modal, setModalProp] = useState({ title: "", message: "", success : true , visible: false })
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget
        const formData = new FormData(form)

        const urlEncodedFormData = new URLSearchParams()
        for (const [key, value] of formData.entries()) urlEncodedFormData.append(key, value.toString())
        const response = await userRegister(urlEncodedFormData)
        setModalProp((v) => ({ ...v, visible: true, message: response.message, success: response.success }))
        if (response.success) navigate("/login")
        
    }

    function toggleVisible() {
        setModalProp((v) => ({ ...v, visible: false }))
    }

    return (
        <div className="flex flex-col flex-grow items-center justify-center mr-auto ">
            <h1 className="text-2xl pt-5">Create an account</h1>
            <form className="flex flex-col gap-5 mt-5" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" id="firstName" name="firstName" required placeholder="John" />
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Doe" />
                </div>
                <div className="input-group">
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" name="userName" required minLength={6} placeholder="johndoe1123" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required placeholder="john.doe@email.com" />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="Password" name="password" required placeholder="******" minLength={8} autoComplete="false" />
                </div>
                <NavLink to="/login" className="self-end text-sm">Already have an account? Login</NavLink>
                <button type="submit" title="Register" className="btn">Register</button>
            </form>
            <Modal text={modal.message} visible={modal.visible} success={modal.success} onPress={toggleVisible} />
        </div>
    )
}
