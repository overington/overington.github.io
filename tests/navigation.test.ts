import { getSiteNavItems, menuItemFactory, type navItem} from '@/lib/navigation'

// get environment variable from .env.development


test('Sample test: two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('Test menuItemFactory', async () => {
    // const siteNavItems = await getSiteNavItems()
    // console.log(siteNavItems)
    /**
     * {
     *   main: [
     *       { text: 'Home', slug: '/' },
     *       { text: 'Thoughts', slug: 'thoughts' },
     *       { text: 'Gallery', slug: 'gallery' },
     *       { text: 'Projects', slug: 'projects' },
     *       { text: 'CV', slug: 'cv' }
     *   ],
     *   footer: [
     *       { text: '@overington', href: 'https://twitter.com/overington' },
     *       { text: 'Github', href: 'https://github.com/overington' },
     *       {
     *       text: 'LinkedIn',
     *       href: 'https://www.linkedin.com/in/scoverington/'
     *       },
     *       { text: 'email', href: 'mailto:s.c.overington@gmail.com' }
     *   ]
     * }
     * 
     * 
     */
    const nav_item: navItem = {text: 'Home', slug: '/'}
    const menu_item = menuItemFactory(nav_item)
    expect(menu_item).toEqual({text: 'Home', href: '//localhost:3000/'})

    const nav_item2: navItem = {text: 'Tutorial', slug: 'tutorial', basePath: 'blog'}
    const menu_item2 = menuItemFactory(nav_item2)
    expect(menu_item2).toEqual({text: 'Tutorial', href: '//localhost:3000/blog/tutorial'})

    const nav_item3: navItem = {text: 'foobar', href: 'https://www.foo.bar'}
    const menu_item3 = menuItemFactory(nav_item3)
    expect(menu_item3).toEqual({text: 'foobar', href: 'https://www.foo.bar'})
});