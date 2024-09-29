import Image from 'next/image';
import { stories } from '@/data';

const Stories = () => {
  return (
    <div
      className="p-4 bg-white rounded-xl shadow-dark overflow-scroll text-base scrollbar-hide"
    >
      <div className="flex gap-8 w-max">
        {
          stories.map((item) => (
            <div
              className="flex flex-col items-center gap-2 cursor-pointer"
              key={item.id}
            >
              <Image
                src={item.img}
                alt="Story"
                width={80}
                height={80}
                className='w-20 h-20 rounded-full ring-2'
              />
              <span className='font-medium'>{item.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Stories