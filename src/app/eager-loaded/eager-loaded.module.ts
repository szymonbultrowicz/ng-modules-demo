import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerLoadedComponent } from './eager-loaded-component/eager-loaded.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [EagerLoadedComponent]
})
export class EagerLoadedModule { }
