import { readFile } from 'fs/promises'
import yaml from 'js-yaml'

import { menuItem } from '@/components/Navigation'

// set from env if available else use default 'path'
import { SITE_MENUS_PATH, SITE_URL } from '@/lib/constants'

export type navItem ={
    text: string
    href?: string
    slug?: string
    basePath?: string
}

export function old_menuItemFactory( {text, href, slug, basePath} : navItem ): menuItem {
    /**
     * Construct a MenuItem object from a navItem object
     * 
     * @param text - text to display in the nav item
     * @param href - href to link to
     * @param slug - slug of the page
     * @param basePath - base path of the page
     * @returns MenuItem
     * 
     * if href is defined, return href
     * if slug and optionally basePath are defined return path with format: {HOST}/{basePath}/{slug}
     * if neither slug nor href are defined throw error
     * 
     * example:
     * navItemFactory({'Home'}) => {text: 'Home', href: '/'}
     * navItemFactory({'Tutorial',slug: 'tutorial', basePath: 'blog'}) => {text: 'Tutorial', href: 'https://{HOST}/blog/tutorial'}
    */

    if ( !slug && !href ) {
        throw new Error('href or slug and basePath must be defined')
    }
    if (slug === '/' && !href) {
        // replace slug with empty string to avoid double slashes
        href = [SITE_URL, basePath].filter(Boolean).join('/')
    }
    return {
        text: text,
        href: (href) ? href : [process.env.HOST, basePath, slug].filter(Boolean).join('/')
    }
}

export function menuItemFactory( {text, href, slug, basePath} : navItem ): menuItem {

    // remove leading and trailing slashes from slug
    slug = slug?.replace(/^\/|\/$/g, '')
    // remove leading and trailing slashes from basePath
    basePath = basePath?.replace(/^\/|\/$/g, '')
    // http for localhost, https for production
    const protocol = (process.env.NODE_ENV === 'production') ? 'https' : 'http'

    return {
        text: text,
        // nb only one '/' after protocol
        href: (href) ? href : [`${protocol}:/`, SITE_URL, basePath, slug].filter(Boolean).join('/'),
    }
}


// Read the YAML file
export async function getSiteNavItems(){
    return yaml.load(await readFile(
        SITE_MENUS_PATH,
        'utf8'
    )) as {
        main: navItem[],
        footer: navItem[]
    }
}