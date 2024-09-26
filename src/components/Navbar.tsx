import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT  */}
      <div className="md:hidden lg:block">
        <Link href="/" className="text-xl text-blue-600 font-bold">GEEKYSOCIAL</Link>
      </div>

      {/* CENTER  */}
      <div className="hidden md:flex text-base">
        {/* LINKS  */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-5 h-5"
            />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/friends.png"
              alt="Friends"
              width={16}
              height={16}
              className="w-5 h-5"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/stories.png"
              alt="Stories"
              width={16}
              height={16}
              className="w-5 h-5"
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>

      {/* RIGHT  */}
      <div className="flex items-center gap-4">
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar