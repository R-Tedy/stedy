import { FeedbackDetails } from '@/constants'
import React from 'react'

function Feedback() {
  return (
    <section className='p-4'>
      <h2 className='sub_heading text-center m-8'>What People Say About Me..</h2>
      <div className='flex gap-10 max-md:flex-wrap'>
        {FeedbackDetails.map((feedback, index)=>(
          <div 
            key={index}
            className='black_border p-5 flex flex-col h-[300] justify-center'
          >
            <p className='w-4/6 p-3 mb-3 font_regular'>{feedback.comment}</p>
            <h4 className='text-right mr-8 sub_heading2'>{feedback.commentor}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Feedback