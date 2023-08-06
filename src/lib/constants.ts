import { join } from 'path'

export const NODE_ENV = process.env.NODE_ENV || 'production'

// Site info
export const SITE_NAME = process.env.SITE_NAME || 'Blog [Samuel Overington]'
export const SITE_DESCRIPTION =
  process.env.SITE_DESCRIPTION ||
  'A collection of my thoughts, ideas and learnings.'
export const SITE_AUTHOR = process.env.SITE_AUTHOR || 'Samuel Overington'

// Paths
export const SITE_MENUS_PATH = process.env.SITE_MENUS_PATH
  ? join(process.cwd(), process.env.SITE_MENUS_PATH)
  : join(process.cwd(), 'src/_content/site-menus.yaml')
export const POSTS_PATH = process.env.POSTS_PATH
  ? join(process.cwd(), process.env.POSTS_PATH)
  : join(process.cwd(), './src/_posts')
export const BLOG_SLUG = 'thoughts'

// Site URL
export const HOSTNAME = process.env.HOSTNAME || 'localhost'
// Default to no port
export const PORT = process.env.PORT || ''

// if process.env.SITE_URL is set, use that, otherwise use `${HOSTNAME}:${PORT}` if NODE_ENV is dev, otherwise use `${HOSTNAME}`
export const SITE_URL =
  process.env.SITE_URL ||
  (NODE_ENV === 'production'
    ? `https://${HOSTNAME}`
    : `http://${HOSTNAME}:${PORT}`)
