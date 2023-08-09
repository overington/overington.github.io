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

import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from '@/_styles/slider.module.scss'
// import 'react-awesome-slider/src/core/styles'

export function Subtitle(props: {sub: string | React.ReactNode} ) {
  //  if string type, wrap in h3 tag, else if ReactNode type, render it, else if null, don't add anything
  if (typeof props.sub === 'string') {
    return <h3>{props.sub}</h3>
  } else if (props.sub) {
    return props.sub
  } else {
    return ''
  }
}

export function HeaderLayout(props: {
  title: string | React.ReactNode
  children?: React.ReactNode
  pre_title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  media: postMedia
  container_classes?: string[]
}) {
  const subtitle = Subtitle(props.subtitle)
  return (
    <AwesomeSlider cssModule={AwesomeSliderStyles}>
      <div>
        <h1 className="post-header-title">{props.title}</h1>
        {subtitle}
      </div>
      <div className="post-header-content">
        {props.media.gallery && (
          <div className="post-header-media">
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
          <div className="post-header-children">{props.children}</div>
        )}
      </div>
    </AwesomeSlider>
  )
}
export function HeaderLayout_old(props: {
  title: string | React.ReactNode
  children?: React.ReactNode
  pre_title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  media: postMedia
  container_classes?: string[]
}) {
  const classes_container = props.container_classes
    ? ' ' + props.container_classes.join(' ')
    : ''
  const background_img_class = props.media.featured ? ' with-featured-img' : ''
  // const background_img_style = props.media.featured ? { backgroundImage: `url('${props.media.featured.href}')` } : {}
  const render_subtitle = (sub: string | React.ReactNode) => {
    // if props.subtitle is a string, wrap it in h3 tag, else if it is ReactNode
    // render it, else if it is null don't add anything
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
      className={`post-header${background_img_class}${classes_container}`}
    >
      {props.media.featured && (
        <Image
          src={props.media.featured.href}
          className={props.media.featured.classes.filter(Boolean).join(' ')}
          alt={props.media.featured.alt}
          width={props.media.featured.width || 500}
          height={props.media.featured.height || 500}
        />
      )}
      <h1 className="post-header-title">{props.title}</h1>
      <div className="post-header-content">
        {render_subtitle(props.subtitle)}
        {props.media.gallery && (
          <div className="post-header-media">
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
          <div className="post-header-children">{props.children}</div>
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
  return (
    <HeaderLayout
      pre_title={<span>Featured post from: {post_date}</span>}
      title={<Link href={post_url}>{post.title}</Link>}
      subtitle={post_tags}
      media={post.media}
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
  // class to add here: hero-index
  return (
    <HeaderLayout
      pre_title={post_date}
      title={post.title}
      subtitle={post_tags}
      media={post.media}
      container_classes={['hero-index']}
    >
      <p className="post-description">{post.description}</p>
    </HeaderLayout>
  )
}
