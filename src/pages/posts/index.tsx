import Link from 'next/link'
import { MainNav, Post, Footer } from '@/components/Content'

export default function Blog() {
    const posts = [
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
        <Post>
            <PostList posts={posts} />
        </Post>
        <Footer />
        </>
    )
}
type PostItem = {
    title: string,
    slug: string
}
export function PostList( props: { posts: PostItem[]}) {
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