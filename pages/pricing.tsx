import React from 'react';
import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';

const FORMATS = [
  {
    title: 'Аудит',
    duration: '1–2 недели',
    description:
      'Модель угроз для вашего ИИ-решения или инициативы: данные, интеграции, векторы атак. Карта рисков с приоритетами и план снижения.',
  },
  {
    title: 'Пилот',
    duration: '4–8 недель',
    description:
      'Ограниченное по scope решение на реальной задаче: измеримые метрики качества, оценка стоимости эксплуатации, решение «продуктив/нет».',
  },
  {
    title: 'Внедрение и сопровождение',
    duration: 'по договорённости',
    description:
      'Промышленная эксплуатация: интеграция с системами, изоляция данных, контроль доступа, мониторинг качества, обучение команды, документация.',
  },
];

export default function PricingPage() {
  return (
    <Page
      title="Форматы работы"
      description="Аудит, пилот, внедрение под ключ — выбираем формат под зрелость задачи и требования к безопасности."
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
