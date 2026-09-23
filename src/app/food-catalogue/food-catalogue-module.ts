import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCatalogueRoutingModule } from './food-catalogue-routing-module';
import { FoodCatalogue } from './components/food-catalogue';

@NgModule({
  declarations: [FoodCatalogue],
  imports: [CommonModule, FoodCatalogueRoutingModule],
})
export class FoodCatalogueModule {}
