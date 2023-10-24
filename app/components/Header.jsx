import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6'

export default function Header() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center md:px-40 lg:px-52">
      <div className="z-30">
        <Link href="/" className="text-white text-2xl ">
          segun <span className="font-bold font-mono">Caleb</span>
        </Link>
      </div>
      <div className="text-xl flex gap-4 my-4 z-30">
        <Link href="/" className='hover:opacity-25 hover:text-gray-400 duration-300 ease-in-out'>
          <FaFacebook size={25} />
        </Link>
        <Link href="/" className='hover:opacity-25 hover:text-gray-400 duration-300 ease-in-out'>
          <FaLinkedin size={25} />
        </Link>
        <Link href="/" className='hover:opacity-25 hover:text-gray-400 duration-300 ease-in-out'>
          <FaGithub size={25} />
        </Link>
        <Link href="/" className='hover:opacity-25 hover:text-gray-400 duration-300 ease-in-out'>
          <FaXTwitter size={25} />
        </Link>
        <Link href="/" className='hover:opacity-25 hover:text-gray-400 duration-300 ease-in-out'>
          <FaWhatsapp size={25} />
        </Link>
        <Link href="/" className='hover:opacity-25 hover:text-gray-400 duration-300 ease-in-out'>
          <FaInstagram size={25} />
        </Link>
      </div>
    </nav>
  );
}
