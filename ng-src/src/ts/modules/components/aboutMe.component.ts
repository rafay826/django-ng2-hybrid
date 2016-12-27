import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `<h2>{{ title }}</h2>`
})

export class AboutMeComponent {
  title = 'About This Framework';
}
