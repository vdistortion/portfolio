import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'birthdays',
  name: 'Дни рождения сотрудников',
  description: 'Коммерческое приложение для Битрикс24',
  links: [
    {
      name: 'Маркетплейс',
      url: 'https://www.bitrix24.ru/apps/?app=sozdavatel.birthday',
    },
    {
      name: 'Лендинг',
      url: 'https://apps.sozdavatel.ru/birthdays/',
    },
  ],
  tags: ['vue', 'ajax', 'bitrix24', 'stylus', 'marketplace'],
  imageNames: {
    'ДРсотрудников-01.webp': 'Дни рождения сотрудников',
    'ДРсотрудников-02.webp': 'Дни рождения коллег на смартфоне',
    'ДРсотрудников-03.webp': 'Напоминания в календаре',
    'ДРсотрудников-04.webp': 'Сотрудники без дней рождения',
    'ДРсотрудников-05.webp': 'Обсуждение поздравления именинника',
    'ДРсотрудников-06.webp': 'Пост для всех кроме именинника',
    'ДРсотрудников-07.webp': 'Чат для всех кроме именинника',
    'ДРсотрудников-08.webp': 'Дни рождения коллег из экстранет',
    'ДРсотрудников-10.webp': 'Быстрый доступ из профиля пользователя',
  },
};
