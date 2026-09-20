import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';
import { useT } from 'i18n';

const ICONS = ['/grid-icons/asset-1.svg', '/grid-icons/asset-2.svg', '/grid-icons/asset-3.svg', '/grid-icons/asset-4.svg', '/grid-icons/asset-5.svg', '/grid-icons/asset-6.svg'];

export default function Features() {
  const t = useT();
  return (
    <Container>
      <CustomAutofitGrid>
        {t.features.map((singleFeature, idx) => (
          <BasicCard key={idx} imageUrl={ICONS[idx]} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
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
