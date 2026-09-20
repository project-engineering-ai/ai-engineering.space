import { InferGetStaticPropsType } from 'next';
import Homepage from 'views/HomePage/Homepage';
import { getAllPosts } from 'utils/postsFetcher';

export default function EnIndexPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Homepage posts={posts} />;
}

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts('en'),
    },
  };
}
