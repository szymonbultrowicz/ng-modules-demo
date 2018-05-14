import {Component} from '@angular/core';
import {SomeCoreService} from './some-core.service';

@Component({
  selector: 'app-custom-injected-component',
  template: `
    <p>
      SomeCoreService inside a component from custom injector: {{ someCoreService.id }}
    </p>
  `,
  styles: [],
  providers: [SomeCoreService]
})
export class AppCustomInjectedComponent {

  constructor(public someCoreService: SomeCoreService) { }

}
