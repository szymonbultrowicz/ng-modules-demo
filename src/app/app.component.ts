import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <ul>
      <li>
        <h2><a routerLink="/">Home</a></h2>
      </li>
      <li>
        <h2><a routerLink="/eager">Eager loaded module</a></h2>
      </li>
      <li>
        <h2><a routerLink="/lazy">Lazy loaded module</a></h2>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
