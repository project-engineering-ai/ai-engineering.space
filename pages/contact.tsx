import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Page from 'components/Page';
import { EnvVars } from 'env';
import { media } from 'utils/media';
import { useT } from 'i18n';

export function ContactContent() {
  const t = useT();
  return (
    <Page title={t.contactPage.title} description={t.contactPage.description}>
      <Wrapper>
        <Text>
          <p>{t.contactPage.text1}</p>
          <p>{t.contactPage.text2}</p>
        </Text>
        <EmailLink href={'mailto:' + EnvVars.EMAIL}>{EnvVars.EMAIL}</EmailLink>
      </Wrapper>
    </Page>
  );
}

export default function ContactPage() {
  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="ru" href="https://ai-engineering.space/contact/" />
        <link rel="alternate" hrefLang="en" href="https://ai-engineering.space/en/contact/" />
        <link rel="alternate" hrefLang="x-default" href="https://ai-engineering.space/contact/" />
      </Head>
      <ContactContent />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Text = styled.div`
  max-width: 60rem;
  font-size: 1.8rem;
  line-height: 2.8rem;
  opacity: 0.8;

  & > p:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const EmailLink = styled.a`
  margin-top: 4rem;
  font-size: 2.6rem;
  font-weight: bold;
  color: rgb(var(--primary));
  text-decoration: underline;

  ${media('<=phone')} {
    font-size: 2rem;
  }
`;
