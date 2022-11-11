import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='p-5 bg-indigo-400'>
       <Link href='/'className='inline-flex border px-4 py-1 bg-white text-blue-600 rounded-lg  hover:bg-gray-200'>
        Home</Link>{" "}
       <Link href='/search'className='inline-flex border px-4 py-1 bg-white text-blue-600 rounded-lg  hover:bg-gray-200'>
        Search</Link>
    </header>
  )
}

export default Header