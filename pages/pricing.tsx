import React from 'react';
import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';

const FORMATS = [
  {
    title: 'Аудит данных',
    duration: '1–2 недели',
    description:
      'Оцениваем ваши документы и данные под задачу (RAG, fine-tuning, обучение): дубли, дыры, структура, качество разметки. На выходе — карта проблем и план подготовки.',
  },
  {
    title: 'Пилотная подготовка',
    duration: '2–6 недель',
    description:
      'Готовим ограниченную выборку по полному циклу: извлечение, чистка, чанкинг/разметка, контроль качества. Проверяем на реальной задаче и фиксируем метрики.',
  },
  {
    title: 'Потоковая подготовка',
    duration: 'по договорённости',
    description:
      'Регулярная обработка новых документов и данных: конвейер с контролем качества, документация по процессу, отчётность по метрикам.',
  },
];

export default function PricingPage() {
  return (
    <Page
      title="Форматы работы"
      description="Аудит данных, пилотная подготовка, потоковая обработка — выбираем формат под задачу и объём."
    >
      <Grid>
        {FORMATS.map((singleFormat, idx) => (
          <Card key={idx}>
            <Duration>{singleFormat.duration}</Duration>
            <Title>{singleFormat.title}</Title>
            <Description>{singleFormat.description}</Description>
          </Card>
        ))}
      </Grid>
    </Page>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 3rem;

  ${media('<=phone')} {
    grid-template-columns: 100%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  border-radius: 1rem;
  background: rgb(var(--secondBackground));
  border: 1px solid rgba(var(--textSecondary), 0.15);
`;

const Duration = styled.div`
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.6;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-size: 2.8rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 2.8rem;
  opacity: 0.8;
`;
