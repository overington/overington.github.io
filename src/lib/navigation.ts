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

export function menuItemFactory( {text, href, slug, basePath} : navItem ): menuItem {

    // remove leading and trailing slashes from slug
    slug = slug?.replace(/^\/|\/$/g, '')
    // remove leading and trailing slashes from basePath
    basePath = basePath?.replace(/^\/|\/$/g, '')

    return {
        text: text,
        href: (href) ? href : [SITE_URL, basePath, slug].filter(Boolean).join('/'),
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