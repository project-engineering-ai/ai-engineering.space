import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import { media } from 'utils/media';

const SERVICES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Внедрение LLM в процессы',
    description:
      'Автоматизация рутины, ассистенты для сотрудников, обработка документов и обращений. Интеграция с существующими системами и данными компании.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'RAG-ассистенты по базе знаний',
    description:
      'Ответы со ссылками на ваши документы: структурный чанкинг, метаданные, проверка качества извлечения на контрольных запросах.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Тестирование и защита LLM',
    description:
      'Промпт-инъекции (прямые и косвенные), утечки данных, обход ограничений. Отчёт по OWASP LLM Top 10 / MITRE ATLAS и план закрытия уязвимостей.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Аудит ИИ-инициатив',
    description:
      'Модель угроз для вашего решения, оценка рисков утечек и ошибок модели, карта рисков с приоритетами и планом снижения.',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Подготовка данных',
    description:
      'Корпуса и датасеты, структурирование документов под RAG, инструкционные выборки под fine-tuning, контроль качества данных.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Сопровождение',
    description:
      'Мониторинг качества ответов и стоимости эксплуатации, обновление индексов и знаний, обучение вашей команды.',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Услуги" description="Внедрение ИИ в бизнес с упором на безопасность: от аудита и пилота до промышленной эксплуатации.">
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
