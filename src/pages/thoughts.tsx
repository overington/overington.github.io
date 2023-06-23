import Link from 'next/link'

import { type postItem } from '@/lib/content'
import { Post, Footer } from '@/components/Content'
import { Menu, type menuItem } from '@/components/Navigation'

import path from 'path'

export default function Blog(props: {
  mainMenuItems: menuItem[]
  footerMenuItems: menuItem[]
  postItems: postItem[]
  heroPost: postItem
}) {
  const heroHeader = BlogHeader(props.heroPost)
  return (
    <>
      <Menu menuItems={props.mainMenuItems} />
      <Post header={heroHeader}>
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
export function BlogHeader(post: postItem) {
  return (
    <>
      <small>{post.date}</small>
      <h1>{post.title}</h1>
      <h3>{post.description}</h3>
      <p>{post.content}</p>
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
import { get } from 'http'

function getHeroPost(postItems: postItem[]) {
  // search for most recent hero post in postItems, if not found return null
  return postItems.find((post) => post.hero) || null
  
}

export async function getStaticProps() {
  // Get list of posts
  const siteNavItems = await getSiteNavItems()
  // Get list of posts
  const blogPostItems = getAllPosts(['title', 'slug'])
  // Get Hero post
  const blogHeroPost = getHeroPost(blogPostItems) || blogPostItems[0]

  return {
    props: {
      mainMenuItems: siteNavItems.main.map(menuItemFactory),
      footerMenuItems: siteNavItems.footer.map(menuItemFactory),
      postItems: blogPostItems,
      heroPost: blogHeroPost
    }
  }
}
