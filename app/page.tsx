import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-5">
        <h1 className='text-white text-5xl text-center'>Hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel dignissimos officiis fugiat maiores, ea tempore, doloremque dolorum, aliquam voluptatem ut ratione eos nam illo fugit aspernatur quod porro quidem.</p>
        <p className='text-white'>One more text</p>
        <p className='text-white'>Second text</p>
      </div>
    </main >
  )
}
