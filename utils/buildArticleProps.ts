import { serialize } from 'next-mdx-remote/serialize';
import { getSinglePost } from 'utils/postsFetcher';
import { Lang } from 'i18n';

export type ArticleMeta = {
  title: string;
  description: string;
  date: string;
  tags: string;
  imageUrl: string;
};

/** Server-only: собирает пропсы страницы статьи для нужной локали. */
export async function buildArticleProps(slug: string, lang: Lang) {
  const { content, meta } = await getSinglePost(slug, lang);
  const mdxSource = await serialize(content);

  return {
    props: { slug, meta: meta as ArticleMeta, mdxSource, lang },
  };
}
