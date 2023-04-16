import { readdir } from 'fs/promises'

import Link from 'next/link'

import { getPostsList } from '@/lib/content'
import { MainNav, Post, Footer } from '@/components/Content'
import { type MenuItem, menuItemFactory } from '@/lib/navigation'

export default function Blog( {posts} : { posts: menuItem[]}) {
    const posts_hc = [
        {
            title: 'post 1',
            slug: 'post-1'
        },
        {
            title: 'post 2',
            slug: 'post-2'
        }
    ]

    return (
        <>
        <MainNav />
        <Post >
            <PostList posts={posts} />
        </Post>
        <Footer />
        </>
    )
}


export function PostList( props: { posts: menuItem[]}) {
    return (
        <>
        <h1>list of posts</h1>
        <ul>
            {props.posts.map((post) => (
                <li key={post.slug}>
                    <Link href={post.slug}>{post.title}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export async function getStaticProps() {
    // Get list of posts
    const files: menuItem[]  = await getPostsList()
    console.log(`files: ${files}`)
    return {
        props: {
            posts: files
        }
    }

}