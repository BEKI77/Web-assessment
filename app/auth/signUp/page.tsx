import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex h-screen bg-blue-700">
      <div className="flex-1 flex ">
        <div className="w-1/2 my-auto">
          <Image
            src="/icons/Img1.png"
            width={400}
            height={400}
            alt="3D character illustration"
            className="mb-8"
          />
        </div>
          <div className='my-auto p-10 '>
            <h1 className="text-5xl font-bold text-white mb-4">Welcome to A2SV</h1>
            <p className="text-lg text-white/80 font-sans">
              Register for free to receive blogs and learn more about A2SV
            </p>
          </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <div className="flex justify-end mb-8">
            <Link href="/auth/signIn">
              <Button variant="ghost" className="text-blue-700">Sign in</Button>
            </Link>
          </div>
          <h2 className="text-3xl font-bold mb-2">Sign up</h2>
          <p className="text-gray-600 mb-8">
            Hey, Enter your details to sign up
          </p>
          <form className="space-y-4">
            <div>
              <Input type="text" placeholder="Full Name" className="w-full" />
            </div>
            <div>
              <Input type="email" placeholder="Email address" className="w-full" />
            </div>
            <div>
              <Input type="password" placeholder="Password" className="w-full" />
            </div>
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white">
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}