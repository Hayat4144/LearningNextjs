import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Head from 'next/head'
import Layout from '../../../Component/layout'


export default function Firstpost() {
  return (
    <Layout>
      <Head>
        <title>First Post | Next js</title>
      </Head>
      This is first post page
      <h1 className='title text-2xl'>
        Go to home page <Link href={'/'}> <span className='px-5'>Home</span> </Link>
      </h1>
      <div className='my-5'>
        <span> use next js image</span>
        <Image
    src="/images/profile.jpg" // Route of the image file
   width={200}
   height={200}
    alt="Your Name"
  />
      </div>
    </Layout>
  )
}
