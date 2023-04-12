import Image from 'next/image'
import Link from 'next/link'
import { MainNav, Post, Footer } from '@/components/Content'
import profilePic from '@/images/_site/me.jpg'

export default function Home() {
  return (
    <>
      <MainNav />
      <Post header={<MainHeader />}>
      .
      </Post>
      <Footer />
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
