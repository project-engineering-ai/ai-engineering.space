import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { SingleArticle } from 'types';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import { useLang, useT } from 'i18n';

export default function Homepage({ posts }: { posts: SingleArticle[] }) {
  const t = useT();
  const lang = useLang();
  const canonical = lang === 'en' ? 'https://ai-engineering.space/en/' : 'https://ai-engineering.space/';
  return (
    <>
      <Head>
        <title>{t.home.headTitle}</title>
        <meta name="description" content={t.home.headDescription} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="ru" href="https://ai-engineering.space/" />
        <link rel="alternate" hrefLang="en" href="https://ai-engineering.space/en/" />
        <link rel="alternate" hrefLang="x-default" href="https://ai-engineering.space/" />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.svg" title={t.home.whyTitle} overTitle={t.home.whyOverTitle}>
            <p>
              {t.home.whyText[0]} <strong>{t.home.whyText[1]}</strong>
              {t.home.whyText[2]}
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title={t.home.howTitle} overTitle={t.home.howOverTitle} reversed>
            <p>
              {t.home.howText[0]} <strong>{t.home.howText[1]}</strong>
              {t.home.howText[2]}
            </p>
            <ul>
              {t.home.howBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
