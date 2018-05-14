import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SomeCoreService {

  public readonly date = Date.now();
  public readonly id = Math.random();

  constructor() {
    console.log('SomeCoreService init');
  }
}
