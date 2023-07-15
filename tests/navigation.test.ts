import { getSiteNavItems, menuItemFactory } from '@/lib/navigation'

test('Sample test: two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('Navigation items are returned', async () => {
    const siteNavItems = await getSiteNavItems()
    console.log(siteNavItems)

    expect(siteNavItems).not.toBeNull()
    expect(siteNavItems).not.toBeUndefined()

});