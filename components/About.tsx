import Link from 'next/link'
import React from 'react'
import { HobbiesLink, SkillsLinks, TalentsLink } from '@/constants'
import Image from 'next/image'

function About() {
  return (
    <section id='about_hero' className='p-4'>
      <h2 className='sub_heading text-center m-8'>Who am I...</h2>
      <div className='flex flex-col gap-4'>
        <div className='border-2 border-black rounded-lg p-4 '>
          <h3 className='sub_heading2'>Personally</h3>
          <p className='font_regular'>So First of all I am a son, a brother and a friend. I love making things and making a difference. I fancy solving a problem and finding a better way to do things. I also enjoy working with an awesome team and like minded people. I hope to leave a footprint in this world and make it a much better place for the future generations.</p>
        </div>

        <div className='flex gap-4 max-md:flex-col'>
          <div className='flex-1 border-2 border-black p-4 flex flex-col gap-4 rounded-lg'>
            <div>
              <h3 className='sub_heading2'>Professionally</h3>
              <p className='font_regular'>In the Few years I have been around I have been able to gain skills in a varied number of areas. These include:</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='profCard'>
                <h3 className='font-semibold font_regular'>Electrical and Electronics Engineering</h3>
                <p className='font_regular'>I have a Bachelor of Science Degree in Electrical and Electronics Engineering from The Dedan Kimathi University of Technology.</p>
              </div>
              <div className='profCard'>
                <h3 className='font-semibold font_regular'>Software Engineering</h3>
                <p className='font_regular'>I am a self taught software developer. I can comfortably handle Javascript, TypeScript, HTML and CSS projects. I can use Next.js to create full stack web applications and React native to create mobile  Application. I can also.....</p>
              </div>
            </div>
            
            {/* <Button className='bg-black text-white font-semibold hover:border-2 hover:border-black hover:text-black hover:bg-white'>More...</Button> */}
          </div>
          <div className='flex-1 flex flex-col gap-5 justify-center '>
            <div className='border-2 border-black p-4 rounded-lg'>
              <h3 className='sub_heading2'>Talents:</h3>
              <ul className='flex flex-wrap justify-between font_regular'>
                {TalentsLink.map((talent)=>(
                  <li key={talent.label} className=''>
                    <Link href={talent.route}>
                      {talent.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='border-2 border-black p-4 rounded-lg'>
              <h3 className='sub_heading2'>Hobbies:</h3>
              <ul className='flex flex-wrap justify-between font_regular'>
                {HobbiesLink.map((hobby)=>(
                  <li key={hobby.label}>
                    <Link href={hobby.route}>
                      {hobby.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap justify-between p-4'>
          {SkillsLinks.map((skill)=>(
            <Image
              src={skill.imgUrl}
              alt={skill.label}
              key={skill.label}
              width={54}
              height={54}
              // className='border-2 border-black p-2'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About