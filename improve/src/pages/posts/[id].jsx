import React, { Fragment } from 'react'
import Link from 'next/link'

export default function PostPage({ posts }) {
    console.log(posts)
    return (
        <Fragment>
            <p>{posts.title}</p>
        </Fragment>
    )
}

export const getStaticPaths = async () => {
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const result = await request.json();

    const posts = result.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })

    return {
        paths: posts,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { id } = params;
    const request = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let posts = await request.json();
    return {
        props: { posts }
    }
}