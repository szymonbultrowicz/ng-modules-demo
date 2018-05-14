import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SomeCoreService {

  public readonly id = Math.random().toString(36).substr(2, 10);

  constructor() {
    console.log('SomeCoreService init');
  }
}
