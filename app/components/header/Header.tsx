import React from 'react'
import Link from 'next/link'
import A2sv from '../../Icons/a2sv.svg'
const Header = () => {
  return (
    <div className='w-full flex justify-between h-20 text-black bg-white z-50 fixed'>
      <div className='my-auto'>
        <img src='../../icons/a2sv.png' alt="logo" className='px-3'/>
      </div>
      <div className='my-auto flex gap-4 p-3 justify-between'>
          <Link href="/" className='border-2 border-white hover:border-b-blue-900 p-2'>Home</Link>
          <Link href="#" className='border-2 border-white hover:border-b-blue-900 p-2' >Teams</Link>
          <Link href="#" className='border-2 border-white hover:border-b-blue-900 p-2' >Success Stories</Link>
          <Link href="#" className='border-2 border-white hover:border-b-blue-900 p-2' >About us</Link>
          <Link href="/components/blog-list-page" className='border-2 border-white hover:border-b-blue-900 p-2' >Blogs</Link>
          <Link href="#" className='border-2 border-white hover:border-b-blue-900 p-2' >Get Involved</Link>
      </div>
      <div className='my-auto'>
        <button className='mx-4'>Log out</button>
        <Link href="#" className='mx-4 bg-blue-800 text-white py-[10px] px-[25px] rounded-md'>Donate</Link>
      </div>
    </div>
  )
}

export default Header
