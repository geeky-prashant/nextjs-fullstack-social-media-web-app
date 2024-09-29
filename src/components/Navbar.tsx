"use client";

import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./MobileMenu"
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs"
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

import { FiHome } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { TbHexagonPlus } from "react-icons/tb";
import { PiChatDotsBold } from "react-icons/pi";
import { FaRegCircleUser, FaRegBell } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center justify-between">
      {/* LEFT  */}
      <div className="md:hidden lg:block">
        <Link href="/" className="text-xl text-blue-600 font-bold">GEEKYSOCIAL</Link>
      </div>

      {/* CENTER  */}
      <div className="hidden md:flex items-center text-base gap-10">
        {/* LINKS  */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <FiHome
              className="w-5 h-5 text-blue-600"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <GrGroup
              className="w-5 h-5 text-blue-600"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <TbHexagonPlus
              className="w-5 h-5 text-blue-600"
            />
            <span>Stories</span>
          </Link>
        </div>

        {/* SEARCH  */}
        <div className="hidden lg:flex bg-slate-50 py-2 px-4 border border-slate-300 shadow items-center justify-between rounded-lg w-96">
          <input
            type="text" placeholder="Find Geeky Developers..."
            className="bg-transparent outline-none"
          />
          <IoSearch
            className="w-5 h-5 text-slate-400"
          />
        </div>
      </div>

      {/* RIGHT  */}
      <div className="flex items-center gap-5">
        <ClerkLoading>
          <div
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="hidden md:hidden lg:block cursor-pointer">
              <GrGroup
                className="w-5 h-5 text-slate-600"
              />
            </div>
            <div className="hidden md:hidden lg:block cursor-pointer">
              <PiChatDotsBold
                className="w-5 h-5 text-slate-600"
              />
            </div>
            <div className="hidden md:hidden lg:block cursor-pointer">
              <FaRegBell
                className="w-5 h-5 text-slate-600"
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="cursor-pointer hidden md:hidden lg:flex items-center gap-2 text-base">
              <FaRegCircleUser
                className="w-5 h-5 text-slate-600"
              />
              <Link href="/">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar