import React from 'react'

const About = () => {
  return (
   <>
    <section id="about" className='py-20 px-6 bg-white text-gray-800'>
        <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl font-bold mb-6 text-blue-600'>
                About Me                
            </h2>
            <p className='text-lg leading-relaxed'>
                I'm passionate <span className='font-semibold text-gray-900'> Full Stack Developer </span>
                who loves building powerful and scalable web application. My goal is to solve real-world problems using technology and develop application with great user experience and strong backend logic.
                <br /> <br />
                I believe in continuous learning, writing clean and collaborating with teams to build things that matter.
            </p>
        </div>
    </section>
   </>
  )
}

export default About;