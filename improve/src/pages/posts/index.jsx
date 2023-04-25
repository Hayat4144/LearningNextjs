import Link from 'next/link';
import React from 'react'


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const posts = await res.json();
  return {
    props: { posts }
  }
}

export default function Posts({posts}) {
  
  return (
    <div className='post_container flex flex-wrap'>
      {posts.map(post=>(
        <Link href={`/posts/${post.id}`} className=' border border-gray-300 w-[40%] px-2 mx-5 my-5' key={post.id}>
          <h1 className='title'>
            {post.title}
          </h1>
        </Link>
      ))}
    </div>
  )
}
