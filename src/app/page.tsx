const HomePage = () => {
  return (
    <div className="flex gap-6">
      {/* LEFT  */}
      <div className="hidden md:hidden lg:block lg:w-[20%]"></div>

      {/* CENTER  */}
      <div className="w-full md:w-[70%] lg:w-[50%]"></div>

      {/* RIGHT  */}
      <div className="hidden lg:block md:w-[30%] lg:w-[30%]"></div>
    </div>
  )
}

export default HomePage