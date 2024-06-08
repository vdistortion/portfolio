import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'arb-pro',
  name: 'АРБ Про',
  description: 'Фронтенд для сайта',
  detail: `
Классный дизайн сайта, очень много интересных элементов.
Создавался с помощью Gulp и обычного JS, ещё без модулей.
Многие элементы делал впервые, например нужно было подружить слайдер и видео в слайдах, чтобы при переключении неактивный слайд с видео вставал на паузу.
Для новичка не очень простая задача. 😁
`,
  links: [
    {
      name: 'Сайт',
      url: 'https://arb-pro.ru/',
    },
  ],
  tags: [
    'legacy',
    'markup',
    'ajax',
    'svg',
    'gulp',
    'jquery',
    'responsive',
    'pug',
    'stylus',
    'smartgrid',
  ],
  imageNames: {
    'Вход-min.webp': 'Вход',
    'Главная-1-min.webp': 'Главная',
    'Главная-2-min.webp': 'Главная',
    'Главная-3-min.webp': 'Главная',
    'Главная-4-min.webp': 'Главная',
    'Диагностика-1-min.webp': 'Диагностика',
    'Диагностика-2-min.webp': 'Диагностика',
    'Интернет-1-min.webp': 'Интернет',
    'Интернет-2-min.webp': 'Интернет',
    'Интернет-3-min.webp': 'Интернет',
    'Интернет-4-min.webp': 'Интернет',
    'Интернет-5-min.webp': 'Интернет',
    'Исследования-2-min.webp': 'Исследования',
    'Исследования-3-min.webp': 'Исследования',
    'Исследование-1-min.webp': 'Исследование',
    'Исследование-2-min.webp': 'Исследование',
    'Исследование-3-min.webp': 'Исследование',
    'Исследование-4-min.webp': 'Исследование',
  },
};
