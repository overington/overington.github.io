import { type postItem } from '@/lib/content'
import { PostList } from '@/components/Content'
import { Post, Footer, HeroPostHeader } from '@/components/Layout'
import { Menu, type menuItem } from '@/components/Navigation'


export default function PostIndex(props: {
  mainMenuItems: menuItem[]
  footerMenuItems: menuItem[]
  postItems: postItem[]
  heroPost: postItem
}) {
  const heroHeader = HeroPostHeader(props.heroPost)
  return (
    <div className="post-index">
      <Menu
      menu_items={props.mainMenuItems}
      menu_name='main-menu-blog'
      />
      <Post header={heroHeader}>
        <PostList posts={props.postItems} />
      </Post>
      <Footer menuItems={props.footerMenuItems} />
    </div>
  )
}

import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'
import { getAllPosts, getHeroPost } from '@/lib/content'

export async function getStaticProps() {
  // Get list of posts
  const siteNavItems = await getSiteNavItems()
  // Get list of posts
  const blogPostItems = await getAllPosts(['title', 'slug'])
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