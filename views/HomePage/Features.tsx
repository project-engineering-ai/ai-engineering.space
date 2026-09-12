import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Внедрение LLM в процессы',
    description:
      'Ассистенты для сотрудников, автоматизация рутинных операций, обработка документов и обращений. Интегрируем модели в существующие процессы и системы.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'RAG-решения',
    description:
      'Поиск и ответы по базе знаний компании: чанкинг, метаданные, проверка качества извлечения. Модель отвечает со ссылками на ваши документы, а не выдумывает.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Безопасность ИИ-систем',
    description:
      'Тестирование на промпт-инъекции, утечки данных и обход ограничений. Проверяем решения по OWASP LLM Top 10 и MITRE ATLAS, закрываем найденные пробелы.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Аудит и оценка рисков',
    description:
      'Разбираем существующие ИИ-инициативы: что утечёт, что сломается, где модель ошибается дорого. На выходе — карта рисков и план их снижения.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Данные для моделей',
    description:
      'Корпуса и датасеты, структурирование документов под RAG, подготовка выборок под fine-tuning: дедупликация, метрики качества, аудит данных.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Сопровождение и мониторинг',
    description:
      'Контроль качества ответов, дрейфа данных и стоимости эксплуатации. Обучаем вашу команду работе с решением и передаём документацию.',
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
