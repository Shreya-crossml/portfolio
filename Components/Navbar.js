import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
   <nav className="bg-black p-4 shadow-md m-auto">
    <div className="bg-black max-w-9xl flex justify-between items-center">
      <Link href="/"><h1 className=" hover:text-blue-500 text-2xl font-bold text-amber-50 flex">My Portfolio</h1></Link>
      <div className="space-x-8 flex justify-between">
        <Link href="/projects" className="text-amber-50 text-2xl font-bold hover:text-blue-500">Projects</Link>
        <Link href="/skills" className="text-amber-50 text-2xl font-bold hover:text-blue-500">Skills</Link>
        <Link href="/experience" className="text-amber-50 text-2xl font-bold hover:text-blue-500">Experience</Link>
        <Link href="/contact" className="text-amber-50 text-2xl font-bold hover:text-blue-500">Contact</Link>
      </div>
    </div>
  </nav>
    </div>
  )
}

