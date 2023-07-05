import { PostList } from '@/components/Content'
import { Post, Footer, HeaderLayout } from '@/components/Layout'
import { type menuItem, Menu } from '@/components/Navigation'
import { getAllPosts, getAllTags, postItem } from '@/lib/content'
import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'


export default function TagPage(props: {
  mainMenuItems: menuItem[]
  footerMenuItems: menuItem[]
  tag: string
  postItems: postItem[]
}) {
  //   const tags = TagLinks({ tags: props.all_tags })
  return (
    <>
      <Menu
      menu_items={props.mainMenuItems}
      menu_name='main-menu-tag-page'
      />
      <Post
        header={
          <HeaderLayout title="Tag: {props.tag}" subtitle="A list of all tags">
            {props.tag}
          </HeaderLayout>
        }
      >
        <PostList posts={props.postItems} />
      </Post>
      <Footer menuItems={props.footerMenuItems} />
    </>
  )
}

function tagHeader(tag: string) {
  return (
    <>
      <h1>Tag: {tag}</h1>
    </>
  )
}

export async function getStaticPaths() {
  const all_tags = await getAllTags()
  const all_tags_obj = all_tags.map((tag) => {
    return { params: { tag: tag } }
  })

  return {
    paths: all_tags_obj,
    fallback: false
  }
}

export async function getStaticProps({ params }: { params: { tag: string } }) {
  const siteNavItems = await getSiteNavItems()
//   const all_tags = await getAllTags()
  const tag = params.tag
  const posts_list = await getAllPosts(['title', 'tags']).then((posts) => {
    return posts.filter((post) => {
      if (post.tags === undefined) {
        return false
      }
      return post.tags.includes(tag)
    })
  })

  return {
    props: {
      mainMenuItems: siteNavItems.main.map(menuItemFactory),
      footerMenuItems: siteNavItems.footer.map(menuItemFactory),
    //   all_tags,
      tag: tag,
      postItems: posts_list
    }
  }
}
