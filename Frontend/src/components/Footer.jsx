import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function Footer() {
    return (
        <footer className='min-h-24 bg-slate-900 text-white flex flex-col justify-end mt-10'>
            <div className='flex flex-row  text-2xl gap-10 justify-center items-center pb-3'>
                <a href="https://github.com/sauravkhanal" target='_blank'><FaGithub /> </a>
                <a href='https://linkedin.com/in/khanalsaurav' target="_blank"><FaLinkedin /></a>
                <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sauravkhanal635@gmail.com' target="_blank"><IoIosMail className='text-3xl'/></a>
            </div>
        </footer>
    )
}
