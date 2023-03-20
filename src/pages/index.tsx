import Image from 'next/image'
import { MainNav, Post, Footer } from "@/components/Content";
import profilePic from "@/images/_site/me.jpg";


export default function Home() {
  return (
    <>
    <MainNav />
    <Post
    header={<MainHeader />}>
    </Post>
    <Footer />
    </>
  );
}

export function MainHeader() {
  return (
    <>
      <Image
      alt="Samuel Overington"
      src={profilePic} />
      <h1>Samuel Overington</h1>
      <h2>
        Software Engineer | Artist
      </h2>
    </>
  );
}