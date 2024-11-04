import type { TypeModule } from '../types';

export const module: TypeModule = {
  code: 'ios',
  name: 'Интерфейс оптических схем',
  description:
    'Интерфейс управления оптической сетью для компании «Интерсвязь»',
  detail: `
Полученный интерфейс приложения состоит из 3 основных элементов: Карта оптической сети -
основное окно, в котором отображается карта местности с наложенными поверх нее кабелями и узлами
связи. Инструментарий - скрываемый раздел в левой части экрана, содержит легенду карты
оптической сети и инструменты, которыми пользоваться на ней. Представления - скрываемый раздел в
нижней части экрана, используется для вывода подробной информации о выбранных элементах карты
оптической сети и построения схемы оптической сети, карты КТВ и карты GPON. В правом верхнем
углу карты расположена панель быстрых кнопок. Там размещены кнопки - для создания новых кабеля
и ящика. При включении режима редактирования соответствующих элементов (в инструментарии) можно
изменить расположение ящика, изменить положение изгиба кабеля, добавить и удалить точки изгиба
кабелей, включить и отключить отображения слоев карты сети.
  `,
  repos: [
    {
      name: 'GitHub',
      url: 'house-scheme-svg',
    },
  ],
  links: [
    {
      name: 'Структурная схема дома на SVG',
      url: '/house-scheme-svg/',
    },
  ],
  tags: [
    'legacy',
    'ajax',
    'svg',
    'vue',
    'maps',
    'github',
    'jquery',
    'stylus',
    'интерсвязь',
  ],
};
