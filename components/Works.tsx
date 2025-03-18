import { WorksLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Works() {
  return (
    <section id='works_hero' className='p-4'>
      <h2 className='sub_heading text-center m-8'>Here are some of my works...</h2>
      <div className='flex gap-5 justify-center flex-wrap'>
        {WorksLinks.map((work)=>(
          <div 
            key={work.title}
            className='black_border rounded-lg w-80 max-sm:w-11/12 max-md:w-10/12 max-lg:w-3/5'
          >
            <div className='rounded-lg p-1 m-1 h-48 border'>
              <Image
                src={work.imgUrl}
                alt={work.title}
                width={400}
                height={300}
                className='object-cover margin w-full h-full rounded-lg'
              />
            </div>
            <div className='my-1 mx-4 flex flex-col justify-between'>
              <div>
                <h3 className='sub_heading2'>
                  {work.title}
                </h3>
                <Link href={work.siteUrl} target='blank' className='sub_heading3 text-blue-400 underline'>
                  {work.urlTitle}
                </Link>
                {/* <p className='font_regular'>
                  {work.description}
                </p> */}
                <p className='font_regular text-center'>
                  {work.languages}
                </p>
              </div>
              <div className='flex justify-between p-2 max-sm:flex-col max-sm:gap-2'>
                <Link href={work.siteUrl} target='blank' className='black_border font_regular text-center rounded-lg px-4 py-1 w-32 hover:bg-black hover:text-white'>Check Site</Link>
                <Link href={work.detailsUrl} target='blank' className='black_border font_regular text-center rounded-lg px-4 py-1 w-32 hover:bg-black hover:text-white'>Github</Link>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works