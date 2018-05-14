import { Component, OnInit } from '@angular/core';
import {SomeCoreService} from '../../core/some-core.service';

@Component({
  selector: 'app-eager-loaded-component',
  template: `
    <p>
      eager-loaded-component works!
    </p>
    <p>
      Service date: {{ someCoreService.date | date:'full' }}
    </p>
  `,
  styles: []
})
export class EagerLoadedComponent implements OnInit {

  constructor(
    public someCoreService: SomeCoreService,
  ) { }

  ngOnInit() {
  }

}
