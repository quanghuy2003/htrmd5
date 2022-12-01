import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductAddComponent} from "./product-add/product-add.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";

const routes: Routes = [
  {
    path:'product',
    component: ProductListComponent
  } , {
    path:'addProduct',
    component: ProductAddComponent
  }, {
    path:'editProduct',
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
