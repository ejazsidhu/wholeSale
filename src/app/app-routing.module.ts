import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopListComponent } from './shop-list/shop-list.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  { path: 'shop_list', component: ShopListComponent },
  // {path:'**' ,component:AppComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
