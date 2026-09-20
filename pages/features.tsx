import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import { media } from 'utils/media';
import { useT } from 'i18n';

const ICONS = [
  '/grid-icons/asset-1.svg',
  '/grid-icons/asset-2.svg',
  '/grid-icons/asset-3.svg',
  '/grid-icons/asset-4.svg',
  '/grid-icons/asset-5.svg',
  '/grid-icons/asset-6.svg',
];

export default function FeaturesPage() {
  const t = useT();
  return (
    <>
      <Head>
        <link rel="alternate" hrefLang="ru" href="https://ai-engineering.space/features/" />
        <link rel="alternate" hrefLang="en" href="https://ai-engineering.space/en/features/" />
        <link rel="alternate" hrefLang="x-default" href="https://ai-engineering.space/features/" />
      </Head>
      <Page title={t.featuresPage.title} description={t.featuresPage.description}>
        <CustomAutofitGrid>
          {t.features.map((singleService, idx) => (
            <BasicCard key={idx} imageUrl={ICONS[idx]} {...singleService} />
          ))}
        </CustomAutofitGrid>
      </Page>
    </>
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
`;
