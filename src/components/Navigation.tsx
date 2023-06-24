import Link from 'next/link'

export type menuItem = {
    text: string
    href: string
}

export function MenuItem({navItem}: {navItem: menuItem}) {
    const key = `nav-${navItem.text}-${navItem.href}`
    return (
        <li key={key}>
            <Link href={navItem.href}>{navItem.text}</Link>
        </li>
    )
}
export function Menu({menuItems, navClass}: {menuItems: menuItem[], navClass?: string}) {
    const classes = ['navigation', navClass].filter(Boolean).join(' ')
    let id = 0
    const menuItems_jsx = menuItems.map((navItem) => {
        return <MenuItem navItem={navItem} key={++id} />
    })
    return (
    <nav className={classes}>
        <ul className="menu">
            {menuItems_jsx}
        </ul>
    </nav>
    )
}

export function TagLinks(props: { tags: string[], base?: string }) {
    const TagLink = (tag: string) => {
        const href = [props.base, 'tags', tag].join('/')
        return <span>#<Link href={href}>{tag}</Link>{' '}</span>
    }
    const tag_links = props.tags.map((tag) => TagLink(tag))

    return (
    <div className="tag-links">
            {tag_links}
    </div>
    )
}