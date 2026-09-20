import { InferGetStaticPropsType } from 'next';
import ArticleView from 'views/Blog/ArticleView';
import { buildArticleProps } from 'utils/buildArticleProps';
import { getAllPostsSlugs } from 'utils/postsFetcher';

export default function EnSingleArticlePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return <ArticleView {...props} />;
}

export async function getStaticPaths() {
  return {
    paths: getAllPostsSlugs('en').map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params?: { slug?: string } }) {
  const { slug } = params as { slug: string };
  return buildArticleProps(slug, 'en');
}
