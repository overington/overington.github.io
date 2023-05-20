import { getPostBySlug, getAllPosts } from '../src/lib/content';

describe('testing lib/content file', () => {
  test('the resulting object should load the "_markdown" post', () => {
    // title: Markdown Examples
    // date: 2021-03-19
    // description: View examples of all possible Markdown options.
    // tag: web development
    // author: You
    const post = getPostBySlug('_markdown', ['title', 'date', 'description', 'tags', 'author']);
    expect(post.title).toBe('Markdown Examples');
    expect(post.date).toBe('2021-03-19T00:00:00.000Z');
    expect(post.description).toBe('View examples of all possible Markdown options.');
    // expect(post.tags).toStrictEqual(['web development']);
    expect(post.author).toBe('You');
  });
  // add a test for getAllPosts
  test('the resulting object should load all posts', () => {
    const posts = getAllPosts(['title', 'date', 'description', 'tags', 'author']);
    expect(posts.length).toBeGreaterThan(0)
    expect(posts[0]).toHaveProperty('title')
    expect(posts[0]).toHaveProperty('date')
  });
});

