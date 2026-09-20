import { createContext, useContext } from 'react';

export type Lang = 'ru' | 'en';

export const LangContext = createContext<Lang>('ru');

export function useLang(): Lang {
  return useContext(LangContext);
}

/** Префикс локализации для путей: lp('ru','/features') -> '/features', lp('en','/features') -> '/en/features' */
export function lp(lang: Lang, path: string): string {
  return lang === 'en' ? `/en${path === '/' ? '' : path}` : path;
}

/** Пары slug'ов переводов постов (для переключателя языка и hreflang на страницах статей). */
export const POST_SLUG_ALTERNATES: Record<string, string> = {
  'kak-my-gotovim-dokumenty-dlya-llm': 'how-we-prepare-documents-for-llm',
  'pochemu-rag-ne-rabotaet': 'why-rag-does-not-work',
  'how-we-prepare-documents-for-llm': 'kak-my-gotovim-dokumenty-dlya-llm',
  'why-rag-does-not-work': 'pochemu-rag-ne-rabotaet',
};

type Dict = {
  nav: { features: string; blog: string; contact: string };
  langSwitch: string;
  home: {
    headTitle: string;
    headDescription: string;
    heroOverTitle: string;
    heroHeading: string;
    heroDescription: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    whyOverTitle: string;
    whyTitle: string;
    whyText: React.ReactNode[];
    howOverTitle: string;
    howTitle: string;
    howText: React.ReactNode[];
    howBullets: string[];
  };
  cta: {
    overTitle: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  gallery: {
    overTitle: string;
    title: string;
    tabs: { title: string; description: string }[];
  };
  features: { title: string; description: string }[];
  blogSection: { overTitle: string; title: string };
  wave: { title: string; primary: string; secondary: string };
  footer: { company: string; services: string; resources: string; blog: string; contacts: string };
  featuresPage: { title: string; description: string };
  blogPage: { title: string; description: string };
  contactPage: {
    title: string;
    description: string;
    text1: string;
    text2: string;
  };
  notFound: string;
  readTimeSuffix: string;
};

export const translations: Record<Lang, Dict> = {
  ru: {
    nav: { features: 'Услуги', blog: 'Блог', contact: 'Обсудить проект' },
    langSwitch: 'EN',
    home: {
      headTitle: 'AI Engineering — подготовка данных для искусственного интеллекта',
      headDescription:
        'Готовим документы и данные для языковых моделей: корпуса и датасеты, структурирование под RAG, подготовка под fine-tuning, контроль качества данных.',
      heroOverTitle: 'данные для языковых моделей',
      heroHeading: 'Качество модели начинается с данных',
      heroDescription:
        'Мы — команда инженеров данных. Готовим документы и данные, на которых работают языковые модели: корпуса, датасеты, структурирование под RAG и fine-tuning.',
      heroCtaPrimary: 'Обсудить проект',
      heroCtaSecondary: 'Услуги',
      whyOverTitle: 'почему данные',
      whyTitle: 'Качество начинается задолго до первого промпта.',
      whyText: [
        'Модель отвечает ровно тем, что лежит в её данных. Если документы собраны без структуры, с дублями и мусором — не поможет ни выбор модели, ни промпты.',
        'Мы приводим документы и данные в порядок до того',
        ', как они попадут в RAG-систему или в обучение.',
      ],
      howOverTitle: 'как мы работаем',
      howTitle: 'От сырых документов — к готовым данным.',
      howText: [
        'Собираем и чистим корпуса, структурируем документы, размечаем примеры и проверяем качество на каждом шаге.',
        'На выходе — данные, готовые к использованию',
        ', с документацией по процессу.',
      ],
      howBullets: ['Сбор и чистка корпусов и датасетов', 'Чанкинг и метаданные под RAG', 'Валидация примеров под fine-tuning'],
    },
    cta: {
      overTitle: 'первый шаг',
      title: 'Есть документы или данные, которые нужно подготовить для LLM?',
      description:
        'Расскажите, какие документы и данные у вас есть и для какой задачи они готовятся. Предложим план подготовки и оценим объём работ.',
      primary: 'Написать нам',
      secondary: 'Услуги',
    },
    gallery: {
      overTitle: 'форматы работы',
      title: 'Что мы готовим для языковых моделей',
      tabs: [
        {
          title: 'Корпуса и датасеты',
          description:
            '<p>Собираем текстовые корпуса из ваших источников и открытых данных, чистим от дублей и мусора, размечаем под задачу. На выходе — датасет, готовый к использованию.</p>',
        },
        {
          title: 'Документы под RAG',
          description:
            '<p>Структурируем документацию для retrieval-augmented generation: осмысленный чанкинг, метаданные, проверка того, что нужные фрагменты реально находятся по типовым запросам.</p>',
        },
        {
          title: 'Данные под fine-tuning',
          description:
            '<p>Готовим инструкционные и доменные датасеты для дообучения: форматы, шаблоны, валидация примеров, разбиение train/val/test без утечек.</p>',
        },
      ],
    },
    features: [
      {
        title: 'Корпуса и датасеты',
        description: 'Собираем, чистим и размечаем текстовые корпуса и датасеты под задачи обучения и дообучения моделей.',
      },
      {
        title: 'Документы под RAG',
        description:
          'Структурируем документацию для retrieval-augmented generation: чанкинг, метаданные, качество извлечения.',
      },
      {
        title: 'Подготовка под fine-tuning',
        description: 'Готовим инструкционные и доменные датасеты для дообучения: форматы, шаблоны, валидация примеров.',
      },
      {
        title: 'Контроль качества данных',
        description: 'Проверяем полноту, согласованность и чистоту данных: дедупликация, метрики качества, аудит выборок.',
      },
      {
        title: 'Извлечение текста',
        description:
          'Достаём текст из PDF, DOCX, HTML и сканов: таблицы, колонтитулы, структура — без потери смысла и без мусора.',
      },
      {
        title: 'Аудит готовности данных',
        description: 'Оцениваем, годятся ли ваши данные для RAG или обучения, и что нужно исправить: карта проблем и план подготовки.',
      },
    ],
    blogSection: { overTitle: 'блог', title: 'Пишем про данные для LLM — RAG, корпуса, качество' },
    wave: { title: 'Готовы обсудить задачу?', primary: 'Написать нам', secondary: 'Услуги' },
    footer: { company: 'Компания', services: 'Услуги', resources: 'Ресурсы', blog: 'Блог', contacts: 'Контакты' },
    featuresPage: {
      title: 'Услуги',
      description: 'Подготовка данных для языковых моделей: корпуса, датасеты, документы под RAG, данные под fine-tuning.',
    },
    blogPage: { title: 'Блог', description: 'Практика подготовки данных для LLM: RAG, корпуса, качество данных.' },
    contactPage: {
      title: 'Контакты',
      description: 'По вопросам подготовки данных и документов для LLM.',
      text1:
        'Расскажите, какие документы и данные нужно подготовить и для какой задачи — RAG, дообучение, оценка. Мы вернёмся с планом подготовки и оценкой объёма работ.',
      text2: 'Отвечаем в рабочее время.',
    },
    notFound: 'Такой страницы нет — но есть решение вашей задачи 😔',
    readTimeSuffix: ' чтения',
  },
  en: {
    nav: { features: 'Services', blog: 'Blog', contact: 'Discuss a project' },
    langSwitch: 'RU',
    home: {
      headTitle: 'AI Engineering — data preparation for artificial intelligence',
      headDescription:
        'We prepare documents and data for language models: corpora and datasets, RAG structuring, fine-tuning preparation, data quality control.',
      heroOverTitle: 'data for language models',
      heroHeading: 'Model quality starts with data',
      heroDescription:
        'We are a team of data engineers. We prepare the documents and data language models run on: corpora, datasets, structuring for RAG and fine-tuning.',
      heroCtaPrimary: 'Discuss a project',
      heroCtaSecondary: 'Services',
      whyOverTitle: 'why data',
      whyTitle: 'Quality starts long before the first prompt.',
      whyText: [
        'A model answers with exactly what is in its data. If documents are gathered without structure, with duplicates and junk — neither model choice nor prompts will help.',
        'We put documents and data in order before',
        'they reach your RAG system or training pipeline.',
      ],
      howOverTitle: 'how we work',
      howTitle: 'From raw documents — to ready data.',
      howText: [
        'We collect and clean corpora, structure documents, annotate examples and check quality at every step.',
        'The output is production-ready data',
        ', with process documentation.',
      ],
      howBullets: ['Corpus and dataset collection and cleaning', 'Chunking and metadata for RAG', 'Example validation for fine-tuning'],
    },
    cta: {
      overTitle: 'first step',
      title: 'Got documents or data that need preparing for an LLM?',
      description:
        'Tell us what documents and data you have and what task they are being prepared for. We will propose a preparation plan and estimate the effort.',
      primary: 'Write to us',
      secondary: 'Services',
    },
    gallery: {
      overTitle: 'engagement formats',
      title: 'What we prepare for language models',
      tabs: [
        {
          title: 'Corpora and datasets',
          description:
            '<p>We build text corpora from your sources and open data, clean duplicates and junk, annotate for the task. The output is a ready-to-use dataset.</p>',
        },
        {
          title: 'Documents for RAG',
          description:
            '<p>We structure documentation for retrieval-augmented generation: meaningful chunking, metadata, and verification that the right fragments are actually retrieved for typical queries.</p>',
        },
        {
          title: 'Data for fine-tuning',
          description:
            '<p>We prepare instruction and domain datasets for fine-tuning: formats, templates, example validation, leak-free train/val/test splits.</p>',
        },
      ],
    },
    features: [
      {
        title: 'Corpora and datasets',
        description: 'We collect, clean and annotate text corpora and datasets for model training and fine-tuning tasks.',
      },
      {
        title: 'Documents for RAG',
        description: 'We structure documentation for retrieval-augmented generation: chunking, metadata, retrieval quality.',
      },
      {
        title: 'Fine-tuning preparation',
        description: 'Instruction and domain datasets for fine-tuning: formats, templates, example validation.',
      },
      {
        title: 'Data quality control',
        description: 'We check completeness, consistency and cleanliness: deduplication, quality metrics, sample audits.',
      },
      {
        title: 'Text extraction',
        description: 'We extract text from PDF, DOCX, HTML and scans: tables, structure — without losing meaning or adding junk.',
      },
      {
        title: 'Data readiness audit',
        description: 'We assess whether your data is fit for RAG or training and what to fix: an issue map and a preparation plan.',
      },
    ],
    blogSection: { overTitle: 'blog', title: 'Writing about data for LLMs — RAG, corpora, quality' },
    wave: { title: 'Ready to discuss your task?', primary: 'Write to us', secondary: 'Services' },
    footer: { company: 'Company', services: 'Services', resources: 'Resources', blog: 'Blog', contacts: 'Contacts' },
    featuresPage: {
      title: 'Services',
      description: 'Data preparation for language models: corpora, datasets, documents for RAG, data for fine-tuning.',
    },
    blogPage: { title: 'Blog', description: 'Practical data preparation for LLMs: RAG, corpora, data quality.' },
    contactPage: {
      title: 'Contacts',
      description: 'For questions about preparing data and documents for LLMs.',
      text1:
        'Tell us which documents and data need preparing and for what task — RAG, fine-tuning, evaluation. We will come back with a preparation plan and an effort estimate.',
      text2: 'We reply during business hours.',
    },
    notFound: 'This page does not exist — but the solution to your problem does 😔',
    readTimeSuffix: ' read',
  },
};

export function useT() {
  return translations[useLang()];
}
