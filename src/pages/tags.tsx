import Link from 'next/link'
import { getAllTags } from '@/lib/content'
import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'
import { type menuItem } from '@/components/Navigation'


export default function BlogPost(props: {
    mainMenuItems: menuItem[]
    footerMenuItems: menuItem[]
    all_tags: string[]
}) {
  return (
  <div>
    <h1>Hello world, here are the tags</h1>
    {
    props.all_tags.map((tag) => <Link href={`/tags/${tag}`} title={tag}>{tag}</Link> )
  }
  </div>
  )
}


export async function getStaticProps() {
  const siteNavItems = await getSiteNavItems()
  const all_tags = await getAllTags()

  return {
    props: {
      mainMenuItems: siteNavItems.main.map(menuItemFactory),
      footerMenuItems: siteNavItems.footer.map(menuItemFactory),
      all_tags
    }
  }
}