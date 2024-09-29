import AddPost from "@/components/AddPost"
import Feed from "@/components/Feed"
import LeftMenu from "@/components/LeftMenu"
import RightMenu from "@/components/RightMenu"
import Stories from "@/components/Stories"

const HomePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      {/* LEFT  */}
      <div className="hidden md:hidden lg:block lg:w-[20%]">
        <LeftMenu />
      </div>

      {/* CENTER  */}
      <div className="w-full md:w-[70%] lg:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>

      {/* RIGHT  */}
      <div className="hidden md:block lg:block md:w-[30%] lg:w-[30%]">
        <RightMenu />
      </div>
    </div>
  )
}

export default HomePage