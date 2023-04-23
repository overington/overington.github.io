import Link from 'next/link'

import  { type postItem } from '@/lib/content'
import { Post, Footer } from '@/components/Content'
import { Menu, type menuItem } from '@/components/Navigation'

export default function Blog(props: {
  mainMenuItems: menuItem[]
  footerMenuItems: menuItem[]
  postItems: postItem[]
}) {

  return (
    <>
      <Menu menuItems={props.mainMenuItems}/>
      <Post>
        <PostList posts={props.postItems} />
      </Post>
      <Footer menuItems={props.footerMenuItems} />
    </>
  )
}

export function PostList(props: { posts: postItem[] }) {
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

import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'

import { getAllPosts } from '@/lib/content'

export async function getStaticProps() {
  // Get list of posts
  const siteNavItems = await getSiteNavItems()
  // Get list of posts
  const blogPostItems = getAllPosts(['title', 'slug'])

  // const tmp_post_items: postItem[] = [
  //   // postItem must contain:
  //   //   title: string
  //   //   slug: string
  //   //   content: string
  //   //   date: string
  //   {
  //     title: 'post 1',
  //     slug: 'post-1',
  //     content: 'content 1',
  //     date: '2022-01-01'
  //   },
  //   {
  //     title: 'post 2',
  //     slug: 'post-2',
  //     content: 'content 2',
  //     date: '2022-01-02'
  //   }
  // ]

  return {
    props: {
      mainMenuItems: siteNavItems.main.map(menuItemFactory),
      footerMenuItems: siteNavItems.footer.map(menuItemFactory),
      postItems: blogPostItems
    }
  }
}
