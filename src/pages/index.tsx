import Image from 'next/image'
import Link from 'next/link'
import { Post, Footer } from '@/components/Content'
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
      <Menu menuItems={props.mainMenuItems} />
      <Post header={<MainHeader />}>.</Post>
      <Footer menuItems={props.footerMenuItems} />
    </>
  )
}

export function MainHeader() {
  return (
    <>
      <Image
        alt="samuel overington"
        src={profilePic}
        className="profile-avatar"
      />
      <h1>Samuel Overington</h1>
      <h2>⟨Artist|Software Engineer⟩</h2>
      <p>
        I am a <Link href="/cv">ML engineer</Link>, with a background in{' '}
        <Link href="/gallery">visual and participatory art</Link>. I am
        currently working on{' '}
        <Link href="/projects">projects that combine the two</Link>. I am
        interested in the intersection of art and technology, and how it can be
        used to create new experiences.
      </p>
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
