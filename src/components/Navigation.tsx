import Link from 'next/link'

export type menuItem = {
    text: string
    href: string
    pre_link?: string | React.ReactNode
}

export function NavItem({item, key}: {item: menuItem, key: string | number}) {
    return (
        <li key={key}>
            {item.pre_link}<Link href={item.href}>{item.text}</Link>
        </li>
    )
}
export function Menu({menuItems, navClass}: {menuItems: menuItem[], navClass?: string}) {
    const classes = ['navigation', navClass].filter(Boolean).join(' ')
    const menuItems_jsx = menuItems.map((navItem, key) => {
        return <NavItem item={navItem} key={key} />
    })
    return (
    <nav className={classes}>
        <ul className="menu">
            {menuItems_jsx}
        </ul>
    </nav>
    )
}

export function TagNavItems({tags}: { tags: string[] }) {
    // const TagLink = (tag: string, key: string | number) => {
    //     const href = `/tags/${tag}`
    //     return <span key={key}>#<Link href={href}>{tag}</Link>{' '}</span>
    // }
    const tag_items_jsx = tags.map((tag, key) => {
        const href = `/tags/${tag}`
        return <NavItem item={{text: tag, href: href, pre_link:'#'}} key={key} />
    })

    return (
    <ul className="tag-links">
            {tag_items_jsx}
    </ul>
    )
}