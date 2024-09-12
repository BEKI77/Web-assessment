'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu, X, Heart } from 'lucide-react'
import { useState } from 'react'
import { signOut } from 'next-auth/react';


const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const handleSignOut = async () => {
    console.log("here");
    await signOut({ callbackUrl: '/auth/signIn' });
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#", label: "Teams" },
    { href: "#", label: "Success Stories" },
    { href: "#", label: "About us" },
    { href: "/dashboard/blog-list-page", label: "Blogs" },
    { href: "#", label: "Get Involved" },
  ]

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/icons/a2sv.png" alt="A2SV Logo" width={100} height={40} />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-blue-900" onClick={handleSignOut}>
              Log out
            </Button>
            <Button className="bg-blue-800 hover:bg-blue-900 text-white">
              <Heart className="mr-2 h-4 w-4" /> Donate
            </Button>
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button variant="ghost" className="justify-start text-gray-700 hover:text-blue-900">
                    Log out
                  </Button>
                  <Button className="bg-blue-800 hover:bg-blue-900 text-white">
                    <Heart className="mr-2 h-4 w-4" /> Donate
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header