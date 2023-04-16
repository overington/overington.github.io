import Link from 'next/link'
import matter from 'gray-matter'
import { MainNav, Post, Footer } from '@/components/Content'


export default function BlogPost({ post} : { post: PostItem}) {
    const header = postHeader(post)
    return (
        <>
        <MainNav />
        <Post header={header}>
            <p>Here is the post</p>
        
        </Post>
        <Footer />
        </>
    )
}

function postHeader(post : {title: string, date: string}) {
    return (
        <>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        </>
    )
}

export async function getPostBySlug(slug: string) {
    const raw_post = await import(`@/_posts/${slug}.md`)
    const post = matter(raw_post.default)
    console.log(slug)

    return post
}

export async function getStaticProps( context : { params: { slug: string } }) {
    const post: postItem = await getPostBySlug(context.params.slug)
    return {
    props: {
        post: post,
    },
    }
}