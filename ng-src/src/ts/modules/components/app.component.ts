import { Component } from '@angular/core';

@Component({
  selector: 'jumanji',
  template: `<h1>{{ title }}</h1>

				<router-outlet></router-outlet>
				`
})

export class AppComponent { 
    title = 'Jumanji 2.0';
}

