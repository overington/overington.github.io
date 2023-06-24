import { BLOG_SLUG } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import { type postItem } from '@/lib/content'

import markdownStyles from '@/_styles/markdown-styles.module.css'
import path from 'path'

export function MarkdownDiv(props: { html?: string }) {
  return (
    // if html is undefined, return null
    // otherwise, return a div with the html
    props.html === undefined ? null : (
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
    )
  )
}

export function PostDate(post: postItem) {
  if (!post.date) return null
  const date = format_date_str(post.date)
  return <time dateTime={date}>{date}</time>
}

export function format_date_str(date: string) {
  const date_obj = new Date(date)
  // format british casual style
  const date_str = date_obj.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return date_str
}

export function PostLink({
  post,
  link_text = '',
  base = [BLOG_SLUG]
}: {
  post: postItem
  link_text?: string
  base?: string[]
}) {
  return (
    <Link href={path.join(...base, post.slug)}>
      <a>{link_text || post.title}</a>
    </Link>
  )
}
export function PostList({
  posts,
  base = [BLOG_SLUG]
}: {
  posts: postItem[]
  base?: string[]
}) {
  return (
    <>
      <h1>list of posts</h1>
      <ul>
        {posts.map((post) => (
          <ol key={post.slug}>
            <Link href={path.join(...base, post.slug)}>
              {' '}
              {PostDate(post)} | {post.title}
            </Link>
            {post.description && (
              <>
                <br />
                <small className="post-description">{post.description}</small>
              </>
            )}
          </ol>
        ))}
      </ul>
    </>
  )
}