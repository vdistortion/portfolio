import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import type { TypeLink } from '../../../projects';

@Component({
  selector: 'app-page-title',
  imports: [UiIconComponent, RouterLink],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
})
export class PageTitleComponent {
  @Input({ required: true }) public title!: string;
  @Input({ required: true }) public repos!: TypeLink[];
  @Input({ required: true }) public links!: TypeLink[];
  @Input({ required: true }) public isHomePage!: boolean;
}
