import Head from 'next/head';
import styled from 'styled-components';
import ArticleCard from 'components/ArticleCard';
import AutofitGrid from 'components/AutofitGrid';
import Page from 'components/Page';
import { media } from 'utils/media';
import { SingleArticle } from 'types';
import { Lang, LangContext, translations } from 'i18n';

export default function BlogIndexView({ posts, lang }: { posts: SingleArticle[]; lang: Lang }) {
  const t = translations[lang];
  return (
    <LangContext.Provider value={lang}>
      <Head>
        <link rel="alternate" hrefLang="ru" href="https://ai-engineering.space/blog/" />
        <link rel="alternate" hrefLang="en" href="https://ai-engineering.space/en/blog/" />
        <link rel="alternate" hrefLang="x-default" href="https://ai-engineering.space/blog/" />
      </Head>
      <Page title={t.blogPage.title} description={t.blogPage.description}>
        <CustomAutofitGrid>
          {posts.map((singlePost) => (
            <ArticleCard
              key={singlePost.slug}
              title={singlePost.meta.title}
              description={singlePost.meta.description}
              imageUrl={singlePost.meta.imageUrl}
              slug={singlePost.slug}
            />
          ))}
        </CustomAutofitGrid>
      </Page>
    </LangContext.Provider>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }

  .article-card-wrapper {
    max-width: 100%;
  }
`;
