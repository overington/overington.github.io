import React from 'react'
import Link from 'next/link'
import siteMenus from '@/_content/site-menus.yaml'

// main Nextjs Nav component

export type NavItem = {
  text: string
  href: string
}

export function Footer(props: { children?: React.ReactNode }) {
  const footer_menu: NavItem[] = siteMenus.footer
  return (
    <footer className="footer">
      {props.children}
      <ul className="footer-content">
        {footer_menu.map((item) => (
          <li key={item.text}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export function Nav(props: { navItems: NavItem[] }) {
  const { navItems } = props

  return (
    <nav className="navigation">
      <ul className="menu">
        {navItems.map((navItem) => (
          <li key={navItem.text}>
            <Link href={navItem.href}>{navItem.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function MainNav() {
  const mainNavItems: NavItem[] = siteMenus.main

  return <Nav navItems={mainNavItems} />
}

export type PostItem = {
  slug: string
  title: string
}

export function Post(props: {
  header?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <main className="content">
      <article>
        {props.header && <header>{props.header}</header>}
        <div className="post-content">{props.children}</div>
      </article>
    </main>
  )
}
