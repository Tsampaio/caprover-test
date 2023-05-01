import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-5">
        <h1 className='text-white text-5xl text-center'>Hello world</h1>
      </div>
    </main >
  )
}
