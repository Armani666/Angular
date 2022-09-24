import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './calculos/suma/suma.component';
import { RestaComponent } from './calculos/resta/resta.component';

import { FormsModule  } from '@angular/forms';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationModule, BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    RestaComponent,
    ProductlistComponent,
    ProductoFilterPipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
