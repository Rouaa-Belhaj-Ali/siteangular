import { TestComponent } from './test/test.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Whoarewe1Component } from './components/whoarewe1/whoarewe1.component';
import {Whoarewe2Component } from './components/whoarewe2/whoarewe2.component';




const routes: Routes = [{

  path: 'whoarewe1',
  component :  Whoarewe1Component

},

{
  path: 'whoarewe2',
  component : Whoarewe2Component
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
