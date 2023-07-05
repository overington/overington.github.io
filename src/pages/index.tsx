import Image from 'next/image'
import Link from 'next/link'
import { Post, Footer } from "@/components/Layout"
import { Menu } from '@/components/Navigation'
import { menuItem } from '@/components/Navigation'
import { HeaderLayout } from '@/components/Layout'
import profilePic from 'public/images/_site/me.jpg'

// import siteMenus from '@/_content/site-menus.yaml'
import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'


export default function Home(props: {
  mainMenuItems: menuItem[]
  footerMenuItems: menuItem[]
}) {
  const home_header = MainHeader()
  return (
    <div className="home">
      <Menu menuItems={props.mainMenuItems} />
      <Post header={home_header} />
      <Footer menuItems={props.footerMenuItems} />
    </div>
  )
}

export function MainHeader() {
  return (
    <HeaderLayout
      pre_title={<Image alt="samuel overington" src={profilePic} className="profile-avatar" />}
      title="Samuel Overington"
      subtitle="⟨Artist|Software Engineer⟩"
      content_classes={["full-width"]}
    >
      {/* <h1>Samuel Overington</h1> */}
      {/* <h2>⟨Artist|Software Engineer⟩</h2> */}
      <p>
        I am a <Link href="/cv">ML engineer</Link>, with a background in{' '}
        <Link href="/gallery">visual and participatory art</Link>. I am
        currently working on{' '}
        <Link href="/projects">projects that combine the two</Link>. I am
        interested in the intersection of art and technology, and how it can be
        used to create new experiences.
      </p>
    </HeaderLayout>
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
