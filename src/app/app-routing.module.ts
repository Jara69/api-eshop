import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Category1Component} from './category1/category1.component';
import {Category2Component} from './category2/category2.component';
import {Category3Component} from './category3/category3.component';
import {Category4Component} from './category4/category4.component';



const routes: Routes =
  [{path: 'category1', component: Category1Component},
  {path: 'category2', component: Category2Component},
  {path: 'category3', component: Category3Component},
  {path: 'category4', component: Category4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
