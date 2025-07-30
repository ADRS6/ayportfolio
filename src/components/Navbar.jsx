import React from 'react'

const Navbar = () => {
  return (
  <>
  {/* header navbar start  */}
    <div className='navbar bg-gray-200 font-bold'>
        
        <div className="navbar-links flex justify-between p-4">
            <div className='navbar-logo text-3xl'>
                <h2>Aadarsh Yadav</h2>
            </div>
            <ul className='flex items-center justify-between'>
                <li><a className='hover:bg-gray-400 hover:text-white p-6' href='/about'>About</a></li>
                <li><a className='hover:bg-gray-400 hover:text-white p-6' href='/skills'>Skills</a></li>
                <li><a className='hover:bg-gray-400 hover:text-white p-6' href='/projects'>Projects</a></li>
                <li><a className='hover:bg-gray-400 hover:text-white p-6' href='/contact'>Contact</a></li>
                <li><a className='hover:bg-gray-400 hover:text-white p-6' href='/blogs'>Blogs</a></li>
            </ul>
        </div>
    </div>
  {/* header navbar end */}
  </>)
}

export default Navbar