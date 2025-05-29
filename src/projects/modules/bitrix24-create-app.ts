import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'bitrix24-create-app',
  name: 'bitrix24-create-app',
  description: 'Удобный сборщик для приложений Битрикс24',
  detail: `
Удобный сборщик для приложений Битрикс24 первого и второго типов.
Два шаблона: <strong>Angular</strong> и <strong>Vue</strong>.
Возможность локальной разработки и <strong>TypeScript</strong>.
Подключена библиотека BX24 на промисах с удобными пакетными запросами (<strong>bitrix24-library</strong>).
Архив с приложением первого типа при сборке.
Для Vue подключена библиотека компонентов <strong>vue-bitrix24</strong> в стилистике Битрикс24.
<br>
Большой частью задач были приложения для порталов Битрикс24, поэтому создание подобного пакета оставалось вопросом времени.
Изначально это был один шаблон на <strong>Vue</strong>, включающий функционал <strong>bitrix24-library</strong> и <strong>vue-bitrix24</strong>.
Впоследствии их было решено разделить.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'bitrix24-create-app',
    },
    {
      name: 'npmjs',
      url: 'bitrix24-create-app',
    },
  ],
  links: [
    {
      name: 'Docs',
      url: '/bitrix24-create-app/',
    },
  ],
  tags: [
    'github',
    'angular',
    'typescript',
    'scss',
    'vue',
    'bitrix24',
    'npm',
    'vitepress',
  ],
  imageNames: {
    'README.webp': 'Документация',
  },
};
