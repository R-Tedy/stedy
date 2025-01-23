import React from 'react'
import RequestForm from './RequestForm'
import { contactInstructions } from '@/constants'

function Contacts() {
  return (
    <section className='p-4'>
      <div>
        <h2 className='sub_heading text-center m-8'>How to reach me...</h2>
        <div className='flex justify-center mb-8 flex-wrap'>
          <form action="" className='flex gap-8 '>
            <label htmlFor="" className='flex gap-2 font_regular'>
              <input type="radio"/>
              Request a service
            </label>
            <label htmlFor="" className='flex gap-2 font_regular'>
              <input type="radio" />
              Talk to me
            </label>
          </form>
        </div>
        <div className='flex gap-8 flex-wrap max-sm:flex-col'>
          <div className='flex-1 hidden'>
            <RequestForm/>
          </div>
          <div className='flex-1 flex flex-col justify-center gap-5 font_regular'>
            <p>
            Hi There <br /> So this is a simple form to fill out incase you would love my help with  any big idea you might be working on and are stuck.  Here are a few pointers on how this will work:
            </p>
            <ol>
              {contactInstructions.map((contact, index)=>(
                <li key={index}>
                  {index+1}.{contact}
                </li>
              ))}
            </ol>
            <p><b>Email:</b> stedyroland@gmail.com</p>
            <p><b>Phone:</b> +254759693618</p>
            <p><b>WhatsApp:</b> +254759693618</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts