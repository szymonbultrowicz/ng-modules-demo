import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AppRootInjectedComponent } from './root-injected.component';
import {AppCustomInjectedComponent} from './custom-injected.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserMenuComponent,
    AppRootInjectedComponent,
    AppCustomInjectedComponent,
  ],
  exports: [
    AppRootInjectedComponent,
    AppCustomInjectedComponent,
  ],
})
export class CoreModule { }
