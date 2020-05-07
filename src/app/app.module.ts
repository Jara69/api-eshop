import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Category1Component } from './category1/category1.component';
import { Category2Component } from './category2/category2.component';
import { Category3Component } from './category3/category3.component';
import { Category4Component } from './category4/category4.component';

@NgModule({
  declarations: [
    AppComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
