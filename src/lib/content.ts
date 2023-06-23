import { readFileSync, readdirSync } from 'fs'
import { readdir, readFile } from 'fs/promises'
import { join } from 'path'

import matter from 'gray-matter'

// if in production, use the site url from .env else use localhost
import { POSTS_PATH } from '@/lib/constants'

// Types
export type postItem = {
  title: string
  slug: string
  // Optional fields
  content?: string
  // Parse date to string
  date?: string
  description?: string
  tags?: string[]
  media?: { [key: string]: string }
  author?: string
  hero?: boolean
}


export function getPostItems() {
  const all_posts = readdir(POSTS_PATH)
    .then((files) =>
      files.map((file) => {
        file.replace(/\.md$/, '')
        return matter.read(join(POSTS_PATH, file))
      })
    )
    .catch((err) => console.log(err))

  return all_posts
}

export function getPostBySlug(slug: string, fields: string[]=[]) : postItem {
  /**
   * Get a post by slug
   * 
   * @param slug - slug of the post
   * @param fields - fields to return
   * @returns postItem
   * Functions from https://github.com/vercel/next.js/tree/canary/examples/blog-starter
   */
  // make sure that the required fields are present
  if (!fields.includes('title'))  {
    throw new Error('Missing required field: title. Fields: ' + fields.join(',') )
  }

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(POSTS_PATH, `${realSlug}.md`)
  const fileContents = readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  data.slug = realSlug
  data.content = content
  data.date = (typeof data.date === 'object') ? data.date.toISOString() : data.date
  return data as postItem
  // return postItemFactory(data, content)
}
  

export function getAllPostSlugs() {
  /**
   * Get all post slugs in the _posts directory, ignoring files that start with
   * underscore.
   *  
   * @returns string[]
   * 
   * example:
   * getAllPostSlugs() => ['_markdown', 'hello-world']
   *  
   */
  const slugs = readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith('.md'))
    .filter((file) => !file.startsWith('_'))
    .map((file) => file.replace(/\.md$/, ''))
  return slugs
}

export function getAllPosts(fields: string[] = []) : postItem[] {
  /**
   * Load each 'fields' from all posts in the _posts directory.
   * 
   * @param fields - fields to return
   * @returns postItem[]
   */
  const slugs = getAllPostSlugs()
  const posts: postItem[] = (slugs.length > 0) ? slugs.map((slug) => getPostBySlug(slug, fields)) : []
  return posts
}

export function getPostsByTag(tag: string, fields: string[] = []) : postItem[] {
  /**
   * Get all posts with a given tag
   * 
   * @param tag - tag to filter by
   * @param fields - fields to return
   * @returns postItem[]
   */
  const posts = getAllPosts(fields).filter((post) => post.tags && post.tags.includes(tag))
  return posts
}

export function getTags() : string[] {
  /**
   * Get all tags from all posts
   * 
   * @returns string[]
   */
  const posts = getAllPosts(['tags'])
  const tags = posts.flatMap((post) => post.tags)
  return tags
}

import { remark } from 'remark'
import html from 'remark-html'

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}