import React from "react";
import Link from "next/link";

export function Footer(props: { children: React.ReactNode }) {
  return <footer>{props.children}</footer>;
}
// main Nextjs Nav component

export type NavItem = {
  name: string;
  href: string;
};

export function Nav(props: { navItems: NavItem[] }) {
  const { navItems } = props;

  return (
    <nav className="navigation">
      <ul>
        {/* li element for each navItem */}
        {navItems.map((navItem) => (
          <li key={navItem.name}>
            <Link href={navItem.href}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MainNav() {
  const navItems: NavItem[] = [
    { name: "/", href: "/" },
    { name: "Thoughts", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Projects", href: "/projects" },
    { name: "CV", href: "/cv" },
  ];

  return <Nav navItems={navItems} />;
}

export type PostItem = {
  slug: string;
  title: string;
};

export function Post(props: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="content">
      <article>
        <header>{props.header}</header>
        <div className="post-content">{props.children}</div>
      </article>
    </main>
  );
}
