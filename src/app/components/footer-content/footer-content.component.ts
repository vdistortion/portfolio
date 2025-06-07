import { Component } from '@angular/core';
import { UiCardComponent } from '../ui-card/ui-card.component';

type Item = {
  name: string;
  link: string;
};

@Component({
  selector: 'app-footer-content',
  imports: [UiCardComponent],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.scss',
})
export class FooterContentComponent {
  public list: Item[] = [
    {
      name: 'GitHub',
      link: 'https://github.com/vdistortion',
    },
    {
      name: 'npmjs',
      link: 'https://www.npmjs.com/~vdistortion',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/ng_valentin',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/valentin-zolotov/',
    },
  ];
}
