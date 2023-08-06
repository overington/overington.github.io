import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { type menuItem, Menu } from '@/components/Navigation'
import { type postItem, type postMedia } from '@/lib/content'
import { BLOG_SLUG } from '@/lib/constants'
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
      <Menu menu_items={props.menuItems} menu_name="footer-menu" />
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
  post_header_content?: string[]
  post_header_media?: string[]
  post_header_background_img?: string[]
  post_header_children?: string[]
}
export function HeaderLayout(props: {
  title: string | React.ReactNode
  children?: React.ReactNode
  pre_title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  media?: postMedia
  background?: string
  content_classes?: headerClasses
}) {
  const c = props.content_classes
  const c_content =
    c && c.post_header_content ? ' ' + c.post_header_content.join(' ') : ''
  const c_media =
    c && c.post_header_media ? ' ' + c.post_header_media.join(' ') : ''
  const c_children =
    c && c.post_header_children ? ' ' + c.post_header_children.join(' ') : ''
  // Usefuul for setting text color based on background image
  const c_background_img =
    c && c.post_header_background_img
      ? ' ' + c.post_header_background_img.join(' ')
      : ''
  const background_img_style = props.background
    ? {
        backgroundImage: `url('${props.background}')`
      }
    : {}

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
    <header
      className={`post-header${c_background_img} hero-index`}
      style={background_img_style}
    >
      <h1 className="post-header-title">{props.title}</h1>
      <div className={`post-header-content${c_content}`}>
        {render_subtitle(props.subtitle)}
        {props.media.gallery && (
          <div className={`post-header-media${c_media}`}>
            {props.media.gallery.map((media, i) => (
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
        {props.children && (
          <div className={`post-header-children${c_children}`}>
            {props.children}
          </div>
        )}
      </div>
    </header>
  )
}

export function HeroPostHeader(post: postItem) {
  /**
   * Post header for the Blog index page (hero post)
   */
  const post_date = post.date ? <PostDate date_string={post.date} /> : null
  const post_tags = post.tags ? TagNavItems({ tags: post.tags }) : null
  // post url is the blog url plus the post slug
  const post_url = post.slug ? `/${BLOG_SLUG}/${post.slug}` : `/${BLOG_SLUG}/`
  const content_classes: headerClasses = {
    // conditionally set post_header_background_img - background class name if post.background_img
    post_header_background_img: post.media.featured ? ['background-img'] : []
  }

  return (
    <HeaderLayout
      pre_title={<span>Featured post from: {post_date}</span>}
      title={<Link href={post_url}>{post.title}</Link>}
      subtitle={post_tags}
      media={post.media.gallery}
      content_classes={
        {
          // post_header_media: ['half-width'],
          // post_header_children: ['half-width']
        }
      }
    >
      <p className="post-description">{post.description}</p>
    </HeaderLayout>
  )
}

export function PostHeader(post: postItem) {
  /**
   * Post header for post page (for each post)
   */
  const post_date = post.date ? format_date_str(post.date) : null
  const post_author = post.author ? post.author : 'Samuel Overington'
  const post_tags = post.tags ? TagNavItems({ tags: post.tags }) : null

  return (
    <HeaderLayout
      pre_title={post_date}
      title={post.title}
      subtitle={post_tags}
      background={post.background_img}
      // media={post.media}
    >
      <p className="post-description">{post.description}</p>
    </HeaderLayout>
  )
}
