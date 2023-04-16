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