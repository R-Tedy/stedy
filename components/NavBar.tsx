import { NavLinks } from '@/constants'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar() {
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
        <Link href='/' className='hidden max-sm:block'>
          <MenuIcon />
        </Link>
      </div>
    </nav>
  )
}

export default NavBar