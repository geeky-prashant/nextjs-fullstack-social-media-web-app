import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <span>Prashant Bhardwaj</span>
        </div>
        <Image
          src="/more.png"
          alt="More"
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>

      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Post"
            fill
            quality={100}
            className="object-cover rounded-2xl"
          />
        </div>
        <p className="font-normal text-slate-800 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, sit, incidunt ab ad illo officia aliquid at voluptatem nisi eum vero, corporis inventore possimus odit. Delectus, dignissimos ipsa? Expedita, aperiam ipsum assumenda reiciendis ab accusantium blanditiis odit, amet esse consequuntur necessitatibus quae ut iste possimus vitae dolore quam? Accusantium, doloribus veniam?</p>
      </div>

      {/* INTERACTION  */}
      <div className="flex items-center justify-between text-sm mt-4">
        <div className="flex gap-6">
          {/* LIKES  */}
          <div className="flex items-center gap-4 bg-slate-100 p-3 rounded-xl">
            <Image
              src="/like.png"
              alt="Like"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">1.2K+<span className="hidden md:hidden lg:inline"> Likes</span></span>
          </div>

          {/* COMMENTS  */}
          <div className="flex items-center gap-4 bg-slate-100 p-3 rounded-xl">
            <Image
              src="/comment.png"
              alt="Comment"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">500+<span className="hidden md:hidden lg:inline"> Comments</span></span>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-3 rounded-xl">
            {/* SHARE  */}
            <Image
              src="/share.png"
              alt="Share"
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">200+<span className="hidden md:hidden lg:inline"> Shares</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post