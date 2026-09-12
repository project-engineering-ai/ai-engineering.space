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
        <title>{EnvVars.SITE_NAME} — подготовка данных для искусственного интеллекта</title>
        <meta
          name="description"
          content="Готовим документы и данные для языковых моделей: корпуса и датасеты, структурирование под RAG, подготовка под fine-tuning, контроль качества данных."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Качество начинается задолго до первого промпта." overTitle="почему данные">
            <p>
              Модель отвечает ровно тем, что лежит в её данных. Если документы собраны без структуры, с дублями и мусором — не поможет ни
              выбор модели, ни промпты.{' '}
              <strong>Мы приводим документы и данные в порядок до того</strong>, как они попадут в RAG-систему или в обучение.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="От сырых документов — к готовым данным." overTitle="как мы работаем" reversed>
            <p>
              Собираем и чистим корпуса, структурируем документы, размечаем примеры и проверяем качество на каждом шаге.{' '}
              <strong>На выходе — данные, готовые к использованию</strong>, с документацией по процессу.
            </p>
            <ul>
              <li>Сбор и чистка корпусов и датасетов</li>
              <li>Чанкинг и метаданные под RAG</li>
              <li>Валидация примеров под fine-tuning</li>
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
