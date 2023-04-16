import React from 'react'
import Link from 'next/link'
import siteMenus from '@/_content/site-menus.yaml'
import { menuItem } from '@/lib/content'


// main Nextjs Nav component

export function Footer(props: { children?: React.ReactNode }) {
  const footer_menu: menuItem[] = siteMenus.footer
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

// Nav component for extensible menus, taking in menuItems[], and optional nav class

export function Nav({navItems, navClass}: { navItems: menuItem[]; navClass?: string }) {
  const classes = ['navigation', navClass].filter(Boolean).join(' ')
  return (
    <nav className={classes}>
      <ul className="menu">
        {navItems.map((navItem) => (
          <li key={navItem.text}>
            {/* if navItem.href not defined, use slug */}
            {/* const href ?= navItem.href || navItem.slug */}
            <Link href={navItem.href}>{navItem.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function MainNav() {
  // const mainMenu: menuItem[] = siteMenus.main
  return <Nav navItems={siteMenus.main} />
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
