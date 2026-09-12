import React from 'react';
import styled from 'styled-components';
import Page from 'components/Page';
import { EnvVars } from 'env';
import { media } from 'utils/media';

export default function ContactPage() {
  return (
    <Page title="Контакты" description="Расскажите о своей задаче — вернёмся с оценкой подхода и модели угроз.">
      <Wrapper>
        <Text>
          <p>
            Опишите задачу: какой процесс хотите автоматизировать, какие данные есть, какие требования к безопасности. Мы вернёмся с
            планом пилота и оценкой сроков.
          </p>
          <p>Отвечаем в рабочее время, обычно в течение одного рабочего дня.</p>
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
