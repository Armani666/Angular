import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumaComponent } from './calculos/suma/suma.component';
import { ProductlistComponent } from './product/productlist/productlist.component';

const routes: Routes = [
  {path:'', component: ProductlistComponent},
  {path:'suma',component:SumaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
