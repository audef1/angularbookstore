import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CatalogService } from './catalog.service';
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import {OrderService} from './order.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    BookDetailsComponent,
    HomeComponent,
    CustomerDetailsComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [CatalogService, OrderService],
  bootstrap: [AppComponent, CatalogComponent]
})
export class AppModule { }
