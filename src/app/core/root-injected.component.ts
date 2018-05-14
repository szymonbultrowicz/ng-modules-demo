import {Component} from '@angular/core';
import {SomeCoreService} from './some-core.service';

@Component({
  selector: 'app-root-injected-component',
  template: `
    <p>
      SomeCoreService inside a component from root injector: {{ someCoreService.id }}
    </p>
  `,
  styles: [],
})
export class AppRootInjectedComponent {

  constructor(public someCoreService: SomeCoreService) { }

}
