'use client'

import { NavLinks } from '@/constants'
import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar() {
  function showSidebar(){
    const sidebar = document.getElementById('sidebar')!
    sidebar.style.display = 'block'
  }
  function closeSideBar(){
     const sidebar = document.getElementById('sidebar')!
    sidebar.style.display = 'none'
  }

  return (
    <nav className=''>
      <div className='flex justify-between p-4 '>
        <Link href='/'>
          <Image
            src='./logo.svg'
            alt='logo'
            width={90}
            height={28}
          />
        </Link>
        <div>
        <ul id='sidebar' className='font_regular hidden fixed top-0 right-0 rounded-xl 
          z-10 bg-white shadow-sm px-12   py-8'>
            <button 
              onClick={closeSideBar} 
              className='flex w-10/12 hover:bg-black rounded-lg py-1 hover:text-white m-auto justify-center'
            >
              <X className='flex justify-center'/>
            </button>
            {NavLinks.map((link)=>(
              <li
                key={link.label}
                className='border-2  border-black hover:bg-black hover:text-white rounded-lg px-4 py-1 my-2 text-center'
              >
                <Link href={link.route}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='flex gap-8 font_regular max-sm:hidden'>
            {NavLinks.map((link)=>(
              <li
                key={link.label}
              >
                <Link href={link.route}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href='/'>
          <Image
            src='./logo-a.svg'
            alt='logo'
            width={35}
            height={35}
            className='max-sm:hidden'
          />
        </Link>
        <Link href='/' onClick={showSidebar} className='hidden max-sm:block'>
          <MenuIcon />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar