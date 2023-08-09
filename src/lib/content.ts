import { readFileSync, readdirSync } from 'fs'
import { readdir } from 'fs/promises'
import { join } from 'path'

import matter from 'gray-matter'

// if in production, use the site url from .env else use localhost
import { POSTS_PATH } from '@/lib/constants'

// Main post type
export type postItem = {
  title: string
  slug: string
  content?: string
  content_html?: string
  date?: string
  description?: string
  tags?: string[]
  media: postMedia
  post_classes?: string[]
  author?: string
  hero?: boolean
}

export type postMedia = {
  gallery?: mediaItem[]
  featured?: mediaItem
}

export type mediaItem = {
  href: string
  alt: string
  classes: string[]
  width?: number
  height?: number
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

export async function getPostBySlug(
  slug: string,
  fields: string[] = []
): Promise<postItem> {
  /**
   * Get a post by slug
   *
   * @param slug - slug of the post
   * @param fields - fields to return
   * @returns Promise<postItem>
   * Functions from https://github.com/vercel/next.js/tree/canary/examples/blog-starter
   */
  // make sure that the required fields are present
  if (!fields.includes('title')) {
    throw new Error(
      'Missing required field: title. Fields: ' + fields.join(',')
    )
  }

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(POSTS_PATH, `${realSlug}.md`)
  const fileContents = readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const content_html = await markdownToHtml(content)

  // if no data.media, create it
  if (!data.media) {
    data.media = {} as postMedia
  }
  
  data.slug = realSlug
  data.content = content
  data.content_html = content_html
  data.date =
    typeof data.date === 'object' ? data.date.toISOString() : data.date
  return data as postItem
  // return postItemFactory(data, content)
}

export async function getAllTags(): Promise<string[]> {
  /**
   * Get all post tags in the _posts directory
   *
   * @returns Promise<string[]>
   *
   * example:
   * getAllPostTags() => ['_markdown', 'hello-world']
   *
   */
  const posts = await getAllPosts(['title', 'tags'])
  const tags = []
  for (const post of posts) {
    if (post.tags) {
      tags.push(...post.tags)
    }
  }
  return tags
}
export async function getAllPostSlugs(): Promise<string[]> {
  /**
   * Get all post slugs in the _posts directory, ignoring files that start with
   * underscore.
   *
   * @returns Promise<string[]>
   *
   * example:
   * getAllPostSlugs() => ['_markdown', 'hello-world']
   *
   */
  const slugs = readdirSync(POSTS_PATH)
    .filter((file) => file.endsWith('.md'))
    // Filter out draft posts (start with underscore) in production
    .filter(
      (file) => !file.startsWith('_') || !(process.env.NODE_ENV === 'production')
    )
    .map((file) => file.replace(/\.md$/, ''))
  return slugs
}

export async function getAllPosts(fields: string[] = []): Promise<postItem[]> {
  /**
   * Load each 'fields' from all posts in the _posts directory.
   * Fields automatically loaded: title, slug
   *
   * @param fields - fields to return
   * @returns Promise<postItem[]>
   */
  const slugs = await getAllPostSlugs()
  const posts: postItem[] = []
  for (const slug of slugs) {
    const post = await getPostBySlug(slug, fields)
    posts.push(post)
  }
  return posts
}

export async function getPostsByTag(
  tag: string,
  fields: string[] = []
): Promise<postItem[]> {
  /**
   * Get all posts with a given tag
   *
   * @param tag - tag to filter by
   * @param fields - fields to return
   * @returns Promise<postItem[]>
   */
  const posts = await getAllPosts(fields)
  const filtered_posts = posts.filter((post) => post.tags && post.tags.includes(tag))
  return filtered_posts 
}

// export async function getTags() : Promise<string[]> {
//   /**
//    * Get all tags from all posts
//    * 
//    * @returns Promise<string[]>
//    */
//   const posts = await getAllPosts(['tags'])
//   const tags = posts.flatMap((post) => post.tags)
//   console.log('getTags - tags: ', tags)
//   // if tags is undefined, return empty array
//   return tags ? [...new Set(tags)] : []
// }

import { remark } from 'remark'
import html from 'remark-html'

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getHeroPost(postItems: postItem[]) {
  // search for most recent hero post in postItems, if not found return null
  return postItems.find((post) => post.hero) || null
}
