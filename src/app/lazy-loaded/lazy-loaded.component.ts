import {Component, forwardRef, Inject, OnDestroy, OnInit} from '@angular/core';
import {SomeCoreService} from '../core/some-core.service';
import {LazyService} from './lazy.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-lazy-loaded',
  template: `
    <p>
      lazy-loaded works!
    </p>
    <p>
      Service date: {{ someCoreService.date | date:'full' }}
    </p>
    <p>
      <button (click)="subscribeTimer()">Subscribe on timer</button>
    </p>
  `,
  styles: []
})
export class LazyLoadedComponent implements OnInit, OnDestroy {

  private timerSubscription: Subscription = undefined;

  constructor(
    public someCoreService: SomeCoreService,
    @Inject(forwardRef(() => LazyService)) private lazyService: LazyService
  ) { }

  ngOnInit() {
    console.log('LazyLoadedComponent init');
  }

  ngOnDestroy(): void {
    console.log('LazyLoadedComponent destroy');
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = undefined;
    }
  }

  subscribeTimer() {
    this.timerSubscription = this.lazyService.timer.subscribe((val) => console.log('LazyLoadedComponent subscribe', val));
  }

}
