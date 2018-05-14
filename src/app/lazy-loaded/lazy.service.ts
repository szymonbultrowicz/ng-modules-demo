import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LazyService {

  private observableTimer = timer(0, 2_000)
    .pipe(tap((val) => console.log('LazyService observable', val)));

  constructor() {
    setInterval(() => console.log('LazyService timer', Date.now()), 2_000);
  }

  public get timer() {
    return this.observableTimer;
  }

}
