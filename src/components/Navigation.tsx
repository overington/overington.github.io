import Link from 'next/link'

export type menuItem = {
  text: string
  href: string
  pre_link?: string | React.ReactNode
}

export function NavItem({
  nav_item
}: {
  nav_item: menuItem
}) {
  /**
   * @param nav_item: menuItem
   *
   * Create a navigation item from a menuItem object
   *
   * @returns React.ReactNode
   */

  return (
    <li>
      {nav_item.pre_link}
      <Link href={nav_item.href}>{nav_item.text}</Link>
    </li>
  )
}
export function Menu({
  menu_items,
  menu_name,
  nav_classes = []
}: {
  menu_items: menuItem[]
  menu_name: string
  nav_classes?: string[]
}) {
  /**
   * @param menu_items: menuItem[]
   * @param menu_name: string
   * @param nav_classes: string[]
   *
   * Create a navigation menu from a list of menuItem objects
   *
   * @returns React.ReactNode
   */
  const classes = ['navigation', ...nav_classes].filter(Boolean).join(' ')
  const menu_items_jsx = menu_items.map((nav_item, key) => {
    return (
    <NavItem
    nav_item={nav_item}
    key={`${menu_name}-${key}`}
    />
    )
  })
  return (
    <nav className={classes}>
      <ul className="menu">{menu_items_jsx}</ul>
    </nav>
  )
}

export function TagNavItems({ tags }: { tags: string[] }) {
  // const TagLink = (tag: string, key: string | number) => {
  //     const href = `/tags/${tag}`
  //     return <span key={key}>#<Link href={href}>{tag}</Link>{' '}</span>
  // }
  const tag_items_jsx = tags.map((tag, key) => {
    const href = `/tags/${tag}`
    return (
      <NavItem
        nav_item={{ text: tag, href: href, pre_link: '#' }}
        key={`tag-items-${key}`}
      />
    )
  })

  return <ul className="tag-links">{tag_items_jsx}</ul>
}
