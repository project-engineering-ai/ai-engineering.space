import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Container from 'components/Container';
import { formatDate } from 'utils/formatDate';
import { media } from 'utils/media';
import { getReadTime } from 'utils/readTime';
import type { ArticleMeta } from 'utils/buildArticleProps';
import { Lang, LangContext, POST_SLUG_ALTERNATES, translations } from 'i18n';

const BASE = 'https://ai-engineering.space';

export interface ArticleViewProps {
  slug: string;
  meta: ArticleMeta;
  mdxSource: MDXRemoteSerializeResult;
  lang: Lang;
}

export default function ArticleView({ slug, meta, mdxSource, lang }: ArticleViewProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [readTime, setReadTime] = useState('');
  const t = translations[lang];

  useEffect(() => {
    const currentContent = contentRef.current;
    if (currentContent) {
      setReadTime(getReadTime(currentContent.textContent || ''));
    }
  }, []);

  const formattedDate = formatDate(new Date(meta.date));
  const altSlug = POST_SLUG_ALTERNATES[slug] ?? slug;
  const ruUrl = lang === 'en' ? `${BASE}/blog/${altSlug}/` : `${BASE}/blog/${slug}/`;
  const enUrl = lang === 'en' ? `${BASE}/en/blog/${slug}/` : `${BASE}/en/blog/${altSlug}/`;

  return (
    <LangContext.Provider value={lang}>
      <Head>
        <title>
          {meta.title} | {t.blogPage.title}
        </title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={lang === 'en' ? enUrl : ruUrl} />
        <link rel="alternate" hrefLang="ru" href={ruUrl} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="x-default" href={ruUrl} />
      </Head>
      <CustomContainer id="content" ref={contentRef}>
        <Header>
          <Title>{meta.title}</Title>
          <MetaRow>
            <time dateTime={meta.date}>{formattedDate}</time>
          </MetaRow>
        </Header>
        <ContentWrapper>
          <MDXRemote {...mdxSource} />
        </ContentWrapper>
        {readTime ? <ReadTime>{readTime}{t.readTimeSuffix}</ReadTime> : null}
      </CustomContainer>
    </LangContext.Provider>
  );
}

const CustomContainer = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 5rem;
  max-width: 80rem;
`;

const Header = styled.header`
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 4.2rem;
  line-height: 1.2;
  margin-bottom: 2rem;

  ${media('<=tablet')} {
    font-size: 3.2rem;
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  opacity: 0.6;
`;

const ContentWrapper = styled.div`
  font-size: 1.8rem;
  line-height: 2.9rem;
  opacity: 0.9;

  h2 {
    font-size: 2.6rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 2.2rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  p,
  ul,
  ol {
    &:not(:last-child) {
      margin-bottom: 2.5rem;
    }
  }

  ul,
  ol {
    padding-left: 2.4rem;
  }

  a {
    color: rgb(var(--primary));
    text-decoration: underline;
    word-break: break-word;
  }

  code {
    background: rgba(var(--primary), 0.8);
    border-radius: 0.4rem;
    padding: 0 0.6rem;
    font-size: 1.6rem;
  }
`;

const ReadTime = styled.div`
  margin-top: 5rem;
  font-size: 1.5rem;
  opacity: 0.5;
`;
