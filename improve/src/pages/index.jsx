import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <h1 className='title text-2xl'>
      Go to post page <Link href={'/posts/first-post'}>post page</Link>
    </h1>
    </main>
  )
}
