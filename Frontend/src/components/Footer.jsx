import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


export default function Footer() {
    return (
        <footer className='min-h-12 bg-gray-700 text-white flex flex-col justify-center'>
            <div className='flex flex-row  text-2xl gap-10 justify-center items-center p-3'>
                <a href="https://github.com/sauravkhanal" target='_blank' className='hover:scale-110 transition'><FaGithub /> </a>
                <a href='https://linkedin.com/in/khanalsaurav' target="_blank" className='hover:scale-110 transition'><FaLinkedin /></a>
                <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sauravkhanal635@gmail.com' target="_blank" className='hover:scale-110 transition'><IoIosMail className='text-3xl'/></a>
            </div>
        </footer>
    )
}
