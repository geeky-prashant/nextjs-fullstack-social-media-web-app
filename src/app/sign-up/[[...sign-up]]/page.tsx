import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-base font-semibold rounded-lg py-2',
          },
        }}
      />
    </div>
  )
}