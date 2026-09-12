import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import { media } from 'utils/media';

const SERVICES = [
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
      'Структурируем документацию для retrieval-augmented generation: чанкинг, метаданные, качество извлечения на контрольных запросах.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Подготовка под fine-tuning',
    description:
      'Инструкционные и доменные датасеты: форматы, шаблоны, валидация примеров, разбиение train/val/test без утечек.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Контроль качества данных',
    description:
      'Дедупликация, метрики полноты и согласованности, выборочный ручной аудит выборок перед передачей заказчику.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Извлечение текста',
    description:
      'Достаём текст из PDF, DOCX, HTML и сканов: сохраняем таблицы и структуру, убираем колонтитулы и навигационный мусор.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Аудит готовности данных',
    description:
      'Оцениваем ваш корпус под RAG или обучение: карта проблем (дубли, дыры, мусор) и конкретный план подготовки.',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Услуги" description="Подготовка данных для языковых моделей: корпуса, датасеты, документы под RAG, данные под fine-tuning.">
      <CustomAutofitGrid>
        {SERVICES.map((singleService, idx) => (
          <BasicCard key={idx} {...singleService} />
        ))}
      </CustomAutofitGrid>
    </Page>
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
