import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

function layout({children}: Readonly<{children:React.ReactNode}>) {
  return (
    <main className='max-w-screen-2xl m-auto'>
      <NavBar/>
      {children}
      <Footer/>
    </main>
  )
}

export default layout