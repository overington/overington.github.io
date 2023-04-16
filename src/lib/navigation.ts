import Link from 'next/link'
import { menuItem } from '@/components/Navigation'

export type navItem ={
    text: string
    href?: string
    slug?: string
    basePath?: string
}

export function navItemFactory( {text, href, slug, basePath} : navItem ): menuItem {
    /**
     * @param text - text to display in the nav item
     * @param href - href to link to
     * @param slug - slug of the page
     * @param basePath - base path of the page
     * @returns NavItem
     * 
     * if href is defined, return href
     * if slug and optionally basePath are defined return path with format: {HOST}/{basePath}/{slug}
     * if neither slug nor href are defined throw error
     * 
     * example:
     * navItemFactory({'Home'}) => {text: 'Home', href: '/'}
     * navItemFactory({'Tutorial',slug: 'tutorial', basePath: 'blog'}) => {text: 'Tutorial', href: 'https://{HOST}/blog/tutorial'}
    */
    // if not href or slug, throw error
    // console.log(`text: ${text}, href: ${href}, slug: ${slug}, basePath: ${basePath}`)

    if ( !slug && !href ) {
        throw new Error('href or slug and basePath must be defined')
    }
    if (slug === '/' && !href) {
        // replace slug with empty string to avoid double slashes
        href = [process.env.HOST, basePath].filter(Boolean).join('/')
    }
    return {
        text: text,
        href: (href) ? href : [process.env.HOST, basePath, slug].filter(Boolean).join('/')
    }
}