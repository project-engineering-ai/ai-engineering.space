import React from 'react';
import styled from 'styled-components';
import Page from 'components/Page';
import { EnvVars } from 'env';
import { media } from 'utils/media';

export default function ContactPage() {
  return (
    <Page title="Контакты" description="По вопросам подготовки данных и документов для LLM.">
      <Wrapper>
        <Text>
          <p>
            Расскажите, какие документы и данные нужно подготовить и для какой задачи — RAG, дообучение, оценка. Мы вернёмся с планом
            подготовки и оценкой объёма работ.
          </p>
          <p>Отвечаем в рабочее время.</p>
        </Text>
        <EmailLink href={'mailto:' + EnvVars.EMAIL}>{EnvVars.EMAIL}</EmailLink>
      </Wrapper>
    </Page>
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
