import { FormEvent, useState } from "react";
// import { NavLink } from "react-router-dom";
import register from "../modules/register";
import Modal from "../components/modal";

export default function Login() {
    const [modal, setModalProp] = useState({ title: "", message: "", success: true, visible: false })
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement
        const formData = new FormData(form)

        const urlEncodedFormData = new URLSearchParams()
        for (const [key, value] of formData.entries()) urlEncodedFormData.append(key, value.toString())
        const response = await register(urlEncodedFormData)
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
                <button type="submit" title="Register" className="btn">Login</button>
                <Modal text={modal.message} visible={modal.visible} success={modal.success} onPress={toggleVisible} />
            </form>
        // </div>
    )
}
