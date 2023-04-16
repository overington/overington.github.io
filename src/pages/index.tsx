import Image from 'next/image'
import Link from 'next/link'
import { Post, Footer } from '@/components/Content'
import { menuItem } from '@/components/Navigation'
import { Menu } from '@/components/Navigation'
import profilePic from '@/images/_site/me.jpg'

export default function Home(props: {mainMenuItems: menuItem[], footerMenuItems: menuItem[]}) {

  return (
    <>
    <Menu menuItems={props.mainMenuItems} />
      <Post header={ <MainHeader /> }>
        .
      </Post>
      <Footer menuItems={props.footerMenuItems}/>
    </>
  )
}

export function MainHeader() {
  return (
    <>
      <Image alt="samuel overington" src={profilePic} className="profile-avatar"/>
      <h1>Samuel Overington</h1>
      <h2>⟨Artist|Software Engineer⟩</h2>
      <p>I am a <Link href="/cv">ML engineer</Link>, with a background in <Link href="/gallery">visual and participatory art</Link>.
      I am currently working on <Link href="/projects">projects that combine the two</Link>. I am interested in
      the intersection of art and technology, and how it can be used to create
      new experiences.</p>
    </>
  )
}

// import siteMenus from '@/_content/site-menus.yaml'
import { navItem, navItemFactory } from '@/lib/navigation'
import { readFile } from 'fs/promises'
import yaml from 'js-yaml'

export async function getStaticProps() {

  // Read the YAML file
  const siteMenus = yaml.load(await readFile(
    process.cwd()+"/src/_content/site-menus.yaml",
    'utf8'
    )) as {main: navItem[], footer: navItem[]}


  return {
    props: {
      mainMenuItems: siteMenus.main.map(navItemFactory),
      footerMenuItems: siteMenus.footer.map(navItemFactory)
    }
  }
}

