import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center text-white py-8 px-16'>
        <h4 className='bg-black py-2 px-6 rounded-full uppercase'>Target Audience</h4>
        <button className='bg-gray-200 text-black px-6 py-2 rounded-full uppercase tracking-wider text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Header