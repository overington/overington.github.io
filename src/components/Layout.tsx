import React from 'react'
import Image from 'next/image'

import { type menuItem, Menu } from '@/components/Navigation'
import { type postItem } from '@/lib/content'
import { PostDate, MarkdownDiv } from '@/components/Content'
import { TagLinks } from '@/components/Navigation'
import { format_date_str } from '@/components/Content'

export function Footer(props: {
  children?: React.ReactNode
  menuItems: menuItem[]
}) {
  return (
    <footer className="footer">
      {props.children}
      <Menu menuItems={props.menuItems} />
    </footer>
  )
}

export function Post(props: {
  header?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <main className="content">
      <article>
        {props.header && <header>{props.header}</header>}
        {props.children && <div className="post-content">{props.children}</div>}
      </article>
    </main>
  )
}
export type mediaItem = {
  href: string
  alt: string
  width?: number
  height?: number
}

export function HeaderLayout(props: {
  title: string
  children?: React.ReactNode
  pre_title?: string
  subtitle?: string
  media?: mediaItem[]
}) {
  // 
  return (
    <div className="header-layout">
      {props.pre_title && <small>{props.pre_title}</small>}
      <h1>{props.title}</h1>
      {props.subtitle && <h3>{props.subtitle}</h3>}
      {props.children && <>{props.children}</>}
      {props.media && (
        <div className="media">
          {props.media.map((media, i) => (
            <>
            {/* <img src={media.href} alt={media.alt + " img"} /> */}
            <p>{media.href}</p>
            
            <Image
              key={i}
              src={media.href}
              alt={media.alt}
              width={media.width || 500}
              height={media.height || 500}
            />
            </>
          ))}
        </div>
      )}
    </div>
  )
}

export function HeroPostHeader(post: postItem) {
  return (
    <HeaderLayout
      title={post.title}
      pre_title={<PostDate post={post} />}
      subtitle={post.tags}
      media={post.media}
    >
      <p className="post-description">{post.description}</p>
    </HeaderLayout>
  )
}

export function HeroPostHeaderold(post: postItem) {
  return <HeaderLayout title="sample title" />
  // title={post.title}
  // pre_title=<PostDate(post) />
  // subtitle={tag} />
  // return (
  //   <>
  //     <small>{post.tags}</small>
  //     <h1>{post.title}</h1>
  //     <h3>{PostDate(post)}</h3>
  //     <MarkdownDiv html={post.content_html} />
  //     {/* {post.content_html && <p>{post.content_html}</p>} */}
  //   </>
}

export function PostHeader(post: postItem) {
  // post date if it exists
  // post author if it exists
  // post tags if they exist
  const post_date = post.date ? format_date_str(post.date) : null
  const post_author = post.author ? post.author : 'Samuel Overington'
  // if post tags exist, format them as a string with commas
  const post_tags = post.tags ? TagLinks({ tags: post.tags, base: '/' }) : null

  return (
    <>
      <h1 className="post-title">{post.title}</h1>
      <p className="post-author">{post_author}</p>
      {post_tags && (
        <p className="post-tags">
          {/* bold emphasided */}
          <strong>Tags</strong>: {post_tags}
        </p>
      )}
      {post_date && <p className="post-date">{post_date}</p>}
    </>
  )
}
