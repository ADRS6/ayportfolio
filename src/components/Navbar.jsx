import React from 'react'

const Navbar = () => {
  return (
  <>
  {/* header navbar start  */}
    <header className='fixed bg-white w-full shadow-md z-30'>
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h2 className='text-3xl font-bold text-blue-600'>Aadarsh Yadav</h2>
            <ul className='flex gap-10 text-gray-700 font-medium'>
                <li><a className='hover:text-blue-600' href='#about'>About</a></li>
                <li><a className='hover:text-blue-600' href='#skills'>Skills</a></li>
                <li><a className='hover:text-blue-600' href='#projects'>Projects</a></li>
                <li><a className='hover:text-blue-600' href='#contact'>Contact</a></li>
                <li><a className='hover:text-blue-600' href='#blogs'>Blogs</a></li>
            </ul>
        </nav>
    </header>
  {/* header navbar end */}
  </>)
}

export default Navbar