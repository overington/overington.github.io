import { join } from 'path'

// Site info
export const SITE_NAME = process.env.SITE_NAME || 'Next.js Starter'
export const SITE_DESCRIPTION = process.env.SITE_DESCRIPTION || 'Next.js Starter'
export const SITE_AUTHOR = process.env.SITE_AUTHOR || 'Next.js Starter'

// Paths
export const SITE_MENUS_PATH =process.env.SITE_MENUS_PATH ? join(process.cwd(), process.env.SITE_MENUS_PATH) : join(process.cwd(), 'src/_content/site-menus.yaml')
export const POSTS_PATH = process.env.POSTS_PATH ? join(process.cwd(), process.env.POSTS_PATH) : join(process.cwd(), './src/_posts')

// Site URL
export const HOST = process.env.HOST || 'localhost'
export const PORT = process.env.PORT || '3000'
export const SITE_URL = process.env.SITE_URL || `http://${HOST}:${PORT}`
