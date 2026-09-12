import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Корпуса и датасеты',
    description:
      'Собираем, чистим и размечаем текстовые корпуса и датасеты под задачи обучения и дообучения моделей.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Документы под RAG',
    description:
      'Структурируем документацию для retrieval-augmented generation: чанкинг, метаданные, качество извлечения.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Подготовка под fine-tuning',
    description:
      'Готовим инструкционные и доменные датасеты для дообучения: форматы, шаблоны, валидация примеров.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Контроль качества данных',
    description:
      'Проверяем полноту, согласованность и чистоту данных: дедупликация, метрики качества, аудит выборок.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Извлечение текста',
    description:
      'Достаём текст из PDF, DOCX, HTML и сканов: таблицы, колонтитулы, структура — без потери смысла и без мусора.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Аудит готовности данных',
    description:
      'Оцениваем, годятся ли ваши данные для RAG или обучения, и что нужно исправить: карта проблем и план подготовки.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={idx} {...singleFeature} />
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
