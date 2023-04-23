import { readFileSync, readdirSync } from 'fs'
import { readdir, readFile } from 'fs/promises'
import { join } from 'path'

import matter from 'gray-matter'

// if in production, use the site url from .env else use localhost
const POSTS_PATH = join(process.cwd(), process.env.POSTS_PATH) || '/src/_posts'

// Types
export type postItem = {
  title: string
  slug: string
  // Optional fields
  content?: string
  // date as string or Date object
  date?: string
  description?: string
  tags?: string[]
  media?: { [key: string]: string }
}



// const SITE_URL = process.env.NODE_ENV === 'production' ? process.env.SITE_URL : `http://${hostname}:${port}`

export async function getPostItems() {
  const all_posts = await readdir(POSTS_PATH)
    .then((files) =>
      files.map((file) => {
        file.replace(/\.md$/, '')
        return matter.read(join(POSTS_PATH, file))
      })
    )
    .catch((err) => console.log(err))

  return all_posts
}

export async function getPostBySlug_old(slug: string) {
  // check to see if file exists
  if (slug in getPostItems()) {
    return matter.read(join(POSTS_PATH, `${slug}.md`))
  } else {
    // raise Error('File does not exist')
    console.log(`File ${POSTS_PATH}/${slug}.md' does not exist`)
    return null
  }
}
function postItemFactory(data: postItem, content: string) : postItem {
  console.log(`data.date: ${data.date}, typeof: ${typeof data.date}`)
  return {
    title: data.title,
    slug: data.slug,
    content: content,
    // if date is a Date object, convert to string, otherwise leave as is
    date: (typeof data.date === 'object') ? data.date.toISOString() : data.date,
    description: data.description,
    // if list of strings (not null), leave as is, otherwise set to null
    tags: (typeof data.tags === 'object') ? data.tags : null,
    media: (typeof data.media === 'object') ? data.media : null
  }
}
/**
 * BELOW: Functions from vercel/next.js/examples/blog-starter
 */
export function getPostBySlug(slug: string, fields: string[]=[]) : postItem {
  // make sure that the required fields are present
  if ((!fields.includes('title')) || (!fields.includes('slug'))) {
    throw new Error('Missing required fields: slug and content')
  }

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(POSTS_PATH, `${realSlug}.md`)
  const fileContents = readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  data.slug = realSlug
  return postItemFactory(data, content)
}
  

export function getPostSlugs() {
  return readdirSync(POSTS_PATH)
}

export function getAllPosts(fields: string[] = []) : postItem[] {
  const slugs = getPostSlugs()
  const posts = slugs.map(slug => {
    console.log(`loading slug: ${slug}`)
    return getPostBySlug(slug, fields)
  })
  
  return posts
}
