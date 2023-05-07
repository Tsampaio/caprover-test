import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const staticData = await fetch(`http://localhost:3000/api/hello`, { cache: 'no-store' });
  const data = await staticData.json()
  console.log("Hello world")
  console.log("my data")
  console.log(data)
  const name = data.users[0].name;
  return (
    <main>
      <div className="container mx-auto mt-5">
        <h1 className='text-white text-5xl text-center'>Hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel dignissimos officiis fugiat maiores, ea tempore, doloremque dolorum, aliquam voluptatem ut ratione eos nam illo fugit aspernatur quod porro quidem.</p>
        <p className='text-white'>One more text</p>
        <p className='text-white'>Second text</p>
        <p className='text-white'>Third text!</p>
        <p>name: {name}</p>
      </div>
    </main >
  )
}
