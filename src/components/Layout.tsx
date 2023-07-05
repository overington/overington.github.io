import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { type menuItem, Menu } from '@/components/Navigation'
import { type postItem, type mediaItem } from '@/lib/content'
import { PostDate, MarkdownDiv } from '@/components/Content'
import { TagNavItems } from '@/components/Navigation'
import { format_date_str } from '@/components/Content'

export function Footer(props: {
  children?: React.ReactNode
  menuItems: menuItem[]
}) {
  return (
    <footer className="footer">
      {props.children}
      <Menu
      menu_items={props.menuItems}
      menu_name='footer-menu'
      />
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
        {props.header && props.header}
        {props.children && <div className="post-content">{props.children}</div>}
      </article>
    </main>
  )
}
export type headerClasses = {
  post_header_content?:  string[]
  post_header_media?:  string[]
  post_header_children?:  string[]
}
export function HeaderLayout(props: {
  title: string | React.ReactNode
  children?: React.ReactNode
  pre_title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  media?: mediaItem[]
  content_classes?: headerClasses
}) {
  const c = props.content_classes
  const c_content = c && c.post_header_content ? ' ' + c.post_header_content.join(' ') : ''
  const c_media = c && c.post_header_media ? ' ' + c.post_header_media.join(' ') : ''
  const c_children = c && c.post_header_children ? ' ' + c.post_header_children.join(' ') : ''

  const render_subtitle = (sub: string | React.ReactNode) => {
    /**
     * if props.subtitle is a string, wrap it in h3 tag, else if it is ReactNode
     * render it, else if it is null don't add anything
     */
    if (typeof sub === 'string') {
      return <h3>{sub}</h3>
    } else if (sub) {
      return sub
    } else {
      return null
    }
  }

  return (
    <header className="post-header">
      {props.pre_title && <small>{props.pre_title}</small>}
      <h1 className="post-title">{props.title}</h1>
      <div className={`post-header-content${c_content}`}>
        {render_subtitle(props.subtitle)}
        {props.media && (
          <div className={`post-header-media${c_media}`}>
            {props.media.map((media, i) => (
              <Image
                key={i}
                src={media.href}
                alt={media.alt}
                width={media.width || 500}
                height={media.height || 500}
              />
            ))}
          </div>
        )}
        {props.children && <div className={`post-header-children${c_children}`}>{props.children}</div>}
      </div>
    </header>
  )
}

export function HeroPostHeader(post: postItem) {
  const date = post.date ? <PostDate date_string={post.date} /> : null
  const post_tags = post.tags ? TagNavItems({ tags: post.tags }) : null

  return (
    <HeaderLayout
      pre_title={<span>Featured post from: {date}</span>}
      title={<Link href={post.slug}>{post.title}</Link>}
      subtitle={post_tags}
      media={post.media}
      content_classes={{
        post_header_media: ['half-width'],
        post_header_children: ['half-width']
      }}
    >
      <p className="post-description">{post.description}</p>
    </HeaderLayout>
  )
}

export function PostHeader(post: postItem) {
  // post date if it exists
  // post author if it exists
  // post tags if they exist
  const post_date = post.date ? format_date_str(post.date) : null
  const post_author = post.author ? post.author : 'Samuel Overington'
  // if post tags exist, format them as a string with commas
  const post_tags = post.tags ? TagNavItems({ tags: post.tags }) : null
  // <header className="post-header">
  //   {post_date && <p className="post-date">{post_date}</p>}
  //   <h1 className="post-title">{post.title}</h1>
  //   <p className="post-author">{post_author}</p>
  //   {post_tags && (
  //       <span className="post-tags">
  //         Tags: {post_tags}
  //       </span>
  //   )}
  // </header>

  return (
    <HeaderLayout
      pre_title={post_date}
      title={post.title}
      subtitle={post_tags}
      // media={post.media}
    >
      <p className="post-description">{post.description}</p>
    </HeaderLayout>
  )
}
