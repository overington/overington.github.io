import Link from 'next/link'

import { type postItem } from '@/lib/content'
import { Post, Footer } from '@/components/Content'
import { Menu, type menuItem } from '@/components/Navigation'

import path from 'path'

export default function Blog(props: {
  mainMenuItems: menuItem[]
  footerMenuItems: menuItem[]
  postItems: postItem[]
}) {
  return (
    <>
      <Menu menuItems={props.mainMenuItems} />
      <Post header={<BlogHeader />}>
        <PostList posts={props.postItems} />
      </Post>
      <Footer menuItems={props.footerMenuItems} />
    </>
  )
}
export function SampleTextColors() {
  const nums = [0, 3, 5, 7, 10, 20, 30, 40, 50, 60, 70, 80, 90, 'dark', 'light', null]
  return (
    <div>
    {
      nums.map(n => {
      const color_string = n === null ? '' : '-' + n
      return <p style={{color: 'var(--text-color' + color_string +')' }}>text{color_string}</p>
    })
  }
    </div>
  )
}
export function BlogHeader() {
  return (
    <>
      <small>Here is a subtitle</small>
      <h1>Hero title post</h1>
      <h3>Here is a sub-subtitle</h3>
      <p>
        I write about things I find interesting, and things I am working on.
      </p>
    </>
  )
}
function getPostDate(post:postItem) {
  if (!post.date) return null

  return (
         <><time
             dateTime={new Date(post.date).toISOString()}>{
              new Date(post.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })
            }</time> | </>
  )
          }
export function PostList({
  posts,
  base = ['thoughts']
}: {
  posts: postItem[]
  base?: string[]
}) {

  return (
    <>
      <h1>list of posts</h1>
      <ul>
        {posts.map((post) => (
          <ol key={post.slug}>
            
            <Link href={path.join(...base, post.slug)}>{getPostDate(post)}{post.title}</Link>
            {post.description && <><br /><small className="post-description">{post.description}</small></>}
          </ol>
        ))}
      </ul>
    </>
  )
}

import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'

import { getAllPosts } from '@/lib/content'

export async function getStaticProps() {
  // Get list of posts
  const siteNavItems = await getSiteNavItems()
  // Get list of posts
  const blogPostItems = getAllPosts(['title', 'slug'])

  return {
    props: {
      mainMenuItems: siteNavItems.main.map(menuItemFactory),
      footerMenuItems: siteNavItems.footer.map(menuItemFactory),
      postItems: blogPostItems
    }
  }
}
