import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Whoarewe1Component } from './components/whoarewe1/whoarewe1.component';
import { Whoarewe2Component } from './components/whoarewe2/whoarewe2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Whoarewe1Component,
    Whoarewe2Component
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
