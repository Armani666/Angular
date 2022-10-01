import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumaComponent } from './calculos/suma/suma.component';
import { TablasComponent } from './calculos/tablas/tablas.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { CinepolisComponent } from './calculos/cinepolis/cinepolis.component';

const routes: Routes = [
  {path:'', component: ProductlistComponent},
  {path:'suma',component:SumaComponent},
  {path:'tabla',component:TablasComponent},
  {path:'cinepolis',component:CinepolisComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
