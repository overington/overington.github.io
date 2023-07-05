import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'

import { type menuItem, Menu } from '@/components/Navigation'
import {
  type postItem,
  getPostBySlug,
  getAllPostSlugs,
  markdownToHtml
} from '@/lib/content'
import { MarkdownDiv } from '@/components/Content'
import { Post, Footer, PostHeader } from '@/components/Layout'

export default function PostPage(props: {
  mainMenuItems: menuItem[]
  footerMenuItems: menuItem[]
  post: postItem
}) {
  const post_header = PostHeader(props.post)

  return (
    <div className="post-page">
      <Menu menuItems={props.mainMenuItems} />
      <Post header={post_header}>
        <MarkdownDiv html={props.post.content} />
      </Post>
      <Footer menuItems={props.footerMenuItems} />
    </div>
  )
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const siteNavItems = await getSiteNavItems()
  // Load post by slug
  const post = await getPostBySlug(params.slug, [
    'title',
    'content',
    'date',
    'author',
    'tags'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      mainMenuItems: siteNavItems.main.map(menuItemFactory),
      footerMenuItems: siteNavItems.footer.map(menuItemFactory),
      post: {
        ...post,
        content
      }
    }
  }
}
export async function getStaticPaths() {
  const post_slugs = await getAllPostSlugs()
  return {
    paths: post_slugs.map((slug) => {
      return {
        params: {
          slug: slug
        }
      }
    }),
    fallback: false
  }
}
