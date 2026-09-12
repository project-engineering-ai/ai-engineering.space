import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME} — внедрение ИИ в бизнес с упором на безопасность</title>
        <meta
          name="description"
          content="Проектируем, разворачиваем и защищаем решения на основе языковых моделей: RAG-ассистенты, автоматизация процессов, аудит и защита ИИ-систем."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Безопасность — не опция, а требование." overTitle="безопасность по умолчанию">
            <p>
              ИИ-решение, которое работает, но сливает данные клиентов или уязвимо к промпт-инъекциям, — не решение, а риск.{' '}
              <strong>Мы закладываем безопасность с первого дня</strong>: модель угроз, изоляция данных, контроль доступа, тестирование на
              специфичные для LLM атаки по OWASP LLM Top 10 и MITRE ATLAS.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="От пилота до продуктива." overTitle="как мы работаем" reversed>
            <p>
              Начинаем с задачи бизнеса, а не с технологии: показываем измеримый эффект на пилоте,{' '}
              <strong>затем доводим решение до продуктива</strong> — с документацией, мониторингом и обучением команды.
            </p>
            <ul>
              <li>Аудит данных и процессов перед внедрением</li>
              <li>Пилот с измеримыми метриками качества</li>
              <li>Промышленная эксплуатация и сопровождение</li>
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

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
