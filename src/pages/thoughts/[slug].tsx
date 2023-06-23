import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'

import { type menuItem, Menu } from '@/components/Navigation'
import { type postItem, getPostBySlug, getAllPostSlugs, markdownToHtml } from '@/lib/content'
import { Post, Footer } from '@/components/Content'
import markdownStyles from '@/_styles/markdown-styles.module.css'


export default function BlogPost(props: {
    mainMenuItems: menuItem[]
    footerMenuItems: menuItem[]
    post: postItem
}) {
  const post_header = postHeader(props.post)

  return (
      <>
      <Menu menuItems={props.mainMenuItems} />
      <Post header={post_header}>
          <div
            className={markdownStyles['markdown']}
            dangerouslySetInnerHTML={{ __html: props.post.content }}
          />
      
      </Post>
      <Footer menuItems={props.footerMenuItems}/>
      </>
  )
}
function format_date_str(date : string) {
    const date_obj = new Date(date)
    // format british casual style
    const date_str = date_obj.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
    return date_str
}


function postHeader(post : postItem) {
    // post date if it exists
    // post author if it exists
    // post tags if they exist
    const post_date = post.date ? format_date_str(post.date) : null
    const post_author = post.author ? post.author : "Samuel Overington"
    const post_tags = post.tags ? post.tags : null


    return (
        <>
        <h1 className='post-title'>{post.title}</h1>
        <p className='post-author'>{post_author}</p>
        {post_tags && <p className='post-tags'>{post_tags}</p>}
        {post_date && <p className='post-date'>{post_date}</p>}
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
    // Load post by slug
    const post = getPostBySlug(params.slug, [
        'title',
        'content',
        'date',
        'author',
        'tags'
    ])
    const content = markdownToHtml(post.content || '')
  
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
    const post_slugs = getAllPostSlugs()
    return {
      paths: post_slugs.map((slug) => {
        return {
          params: {
            slug: slug
          }
        }
      }
      ),
      fallback: false
    }
  }