import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EagerLoadedModule} from './eager-loaded/eager-loaded.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EagerLoadedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
