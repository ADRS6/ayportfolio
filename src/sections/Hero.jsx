import React from 'react'

const Hero = () => {
  return (
    <>
    <section id="home" className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
        <div className='text-center max-w-2xl'>
            <h2 className='text-3xl md:text-6xl font-bold mb-4 text-gray-900'>
                Hello, I'm <span className='text-blue-600'>Aadarsh Yadav</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
                A full stack developer passionate about building beautiful and functional web application.
            </p>
            <a href="./my-resume.pdf" // Later replace with actual path
            className='bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition' 
            download >
                Download Resume
            </a>
        </div>
    </section>
    </>
  )
}

export default Hero;