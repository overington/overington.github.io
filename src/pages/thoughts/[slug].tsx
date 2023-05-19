import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'

import { type menuItem, Menu } from '@/components/Navigation'
import { type postItem, getAllPosts, getPostBySlug } from '@/lib/content'
import { Post, Footer } from '@/components/Content'


export default function BlogPost(props: {
    mainMenuItems: menuItem[]
    footerMenuItems: menuItem[]
    post: postItem
}) {
    return (
        <>
        <Menu menuItems={props.mainMenuItems} />
        <Post header={postHeader(props.post)}>
            <p>Here is the post</p>
        
        </Post>
        <Footer menuItems={props.footerMenuItems}/>
        </>
    )
}

function postHeader(post : postItem) {
    console.log('postHeader post: ', post)
    return (
        <>
        <h1>Sample Header</h1>
        <p>sample date</p>
        </>
    )
}
type Params = {
    params: {
      slug: string
    }
  }
export async function getStaticProps({params}: Params) {
    const siteNavItems = await getSiteNavItems()
    const post = getPostBySlug(params.slug)
  
    return {
      props: {
        mainMenuItems: siteNavItems.main.map(menuItemFactory),
        footerMenuItems: siteNavItems.footer.map(menuItemFactory),
        post: post
      }
    }
  }
  export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])
  
    return {
      paths: posts.map((post) => {
        return {
          params: {
            slug: post.slug,
          },
        }
      }),
      fallback: false,
    }
  }