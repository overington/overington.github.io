import { readdir } from 'fs/promises'
import matter from 'gray-matter'

// Types

export type postItem = {
  title: string
  date: string
  content: string
  description?: string
  slug?: string
  tags?: string[]
  media?: { [key: string]: string }
}

export type menuItem = {
    text: string
} & (
    { href: string } | { slug: string }
    )

const POSTS_PATH = process.env.POSTS_PATH || './src/_posts'
// if in production, use the site url from .env else use localhost

const SITE_URL = process.env.NODE_ENV === 'production' ? process.env.SITE_URL : `http://${hostname}:${port}`

export async function getPostsList() {
  //   get POSTS_PATH from .env if defined, else use default value of ./src/_posts
  const posts = await readdir(POSTS_PATH)
    .then((files) =>
      files.map((file) => {
        file.replace(/\.md$/, '')
        return matter.read(`${POSTS_PATH}/${file}`)
      })
    )
    .catch((err) => console.log(err))

  return posts
}

export async function getPostBySlug(slug: string) {
  // check to see if file exists
  if (slug in getPostsList()) {
    return matter.read(`${POSTS_PATH}/${slug}.md`)
  } else {
    // raise Error('File does not exist')
    console.log(`File ${POSTS_PATH}/${slug}.md' does not exist`)
    return null
  }
}
