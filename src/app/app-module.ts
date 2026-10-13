// import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing-module';
// import { App } from './app';
// import { HeaderModule } from './header/header-module'
// import {RestaurantListingModule} from './restaurant-listing/restaurant-listing-module'
// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//   declarations: [
//     App,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,HeaderModule,RestaurantListingModule,HttpClientModule
//   ],
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//   ],
//   bootstrap: [App]
// })
// export class AppModule { }





import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderModule } from './header/header-module';
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing-module';
import { OrderSummaryModule} from './order-summary/order-summary-module';

@NgModule({
  declarations: [
    App,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    RestaurantListingModule,
    OrderSummaryModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }