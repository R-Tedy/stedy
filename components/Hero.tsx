// import React from 'react'

import { Button } from "./ui/button"

function Hero() {
  return (
    <section className="m-auto min-h-screen p-4 flex flex-col justify-center">
      <div className="w-8/12 max-sm:w-11/12 mx-auto bg-black text-white text-center h-[70vh] flex flex-col p-10  rounded-xl justify-between">
        <p className="text-lg font_regular font-[24]">Hi, <br />I am Stedy And...</p>
        <h1 className="heading_font ">I <br />Make <br />stuff</h1>
        <Button className="w-1/2 m-auto bg-black text-white border-2 border-white font-semibold text-lg hover:bg-white hover:text-black">
          Explore more
        </Button>
      </div>
    </section>
  )
}

export default Hero