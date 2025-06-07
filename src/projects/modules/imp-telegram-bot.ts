import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'imp-telegram-bot',
  name: '😈 ImpBot 😈',
  description: 'Бот для Telegram',
  detail: `
Использует библиотеку <strong>grammY</strong>, крутится на Vercel, написан на <strong>TypeScript</strong>.
<br>
У этого тестового бота нет специализации, самое полезное это погода.
<br>
Также есть тест на знание флагов + MiniApp.
<br>
И кошки, все же прекрасно знают, для чего был придуман интернет.
`,
  repos: [
    {
      name: 'GitHub',
      url: 'imp-telegram-bot',
    },
  ],
  links: [
    {
      name: 'Bot',
      url: 'https://t.me/ImpTelegramBot',
    },
    {
      name: 'MiniApp',
      url: '/flag-connect/',
    },
  ],
  tags: ['telegram-bot', 'github', 'nodejs', 'api', 'typescript'],
  imageNames: {
    'cat.webp': '/cat',
    'flag_connect.webp': '/flag_connect',
    'flag_connect_settings.webp': 'Settings',
    'miniapp_1.webp': 'MiniApp',
    'miniapp_2.webp': 'MiniApp',
    'miniapp_settings.webp': 'MiniApp Settings',
  },
};
