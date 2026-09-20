import { InferGetStaticPropsType } from 'next';
import BlogIndexView from 'views/Blog/BlogIndexView';
import { getAllPosts } from 'utils/postsFetcher';

export default function EnBlogIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogIndexView posts={posts} lang="en" />;
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts('en'),
    },
  };
}
