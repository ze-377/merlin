import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
      },
    {
      path:"fetch",
      loadChildren:"./fetch/fetch.module#FetchModule"
    },
  {
    path:"add",
    loadChildren:"./add/add.module#AddModule"
  },
{
  path:"signup",
  loadChildren:"./signup/signup.module#SignupModule"
},
{
  path:"login",
  loadChildren:"./login/login.module#LoginModule"
}, 
{ path :"order",
loadChildren:"./order/order.module#OrderModule"

}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
