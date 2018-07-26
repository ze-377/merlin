import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OrderComponent} from './order.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router"
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule,
    RouterModule.forChild([{
      path:"",
      redirectTo:"order",
      pathMatch:"full"
    },
  {
    path:"order",
    component:OrderComponent
  },
])
  ],
  declarations: [OrderComponent]
})
export class OrderModule { }