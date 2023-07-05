import Image from 'next/image'
import Link from 'next/link'
import { Post, Footer } from "@/components/Layout"
import { Menu } from '@/components/Navigation'
import { menuItem } from '@/components/Navigation'
import profilePic from '@/images/_site/me.jpg'

// import siteMenus from '@/_content/site-menus.yaml'
import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'


export default function Home(props: {
  mainMenuItems: menuItem[]
  footerMenuItems: menuItem[]
}) {
  return (
    <>
      <Menu
        menu_items={props.mainMenuItems}
        menu_name='main-menu-gallery'
      />
      <Post>
        <p>Hello World</p>
      </Post>
      <Footer menuItems={props.footerMenuItems} />
    </>
  )
}

export async function getStaticProps() {
  const siteNavItems = await getSiteNavItems()

  return {
    props: {
      mainMenuItems: siteNavItems.main.map(menuItemFactory),
      footerMenuItems: siteNavItems.footer.map(menuItemFactory)
    }
  }
}
