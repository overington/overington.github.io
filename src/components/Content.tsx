import React from 'react'
import { type menuItem, Menu } from '@/components/Navigation'

export function Footer(props: { children?: React.ReactNode, menuItems: menuItem[]}) {
  return (
    <footer className="footer">
      {props.children}
      <Menu menuItems={props.menuItems} />
    </footer>
  )
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
