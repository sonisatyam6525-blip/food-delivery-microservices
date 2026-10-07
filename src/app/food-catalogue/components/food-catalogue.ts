// import { Component, OnInit } from '@angular/core';

import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FoodItem } from '../../Shared/models/FoodItem';
import { FoodCataloguePage } from '../../Shared/models/FoodCatalouguePage';

import { FoodItemService } from '../service/fooditem.service';
import { RestaurantService } from '../../restaurant-listing/service/restaurant.service';
import { Restaurant } from '../../Shared/models/Restaurant';

@Component({
  selector: 'app-food-catalogue',
  standalone: false,
  templateUrl: './food-catalogue.html',
  styleUrl: './food-catalogue.css'
})
export class FoodCatalogue implements OnInit {

  restaurantId!: number;

  foodItemResponse?: FoodCataloguePage;

  foodItemCart: FoodItem[] = [];

  orderSummary!: FoodCataloguePage;

  constructor(
    private route: ActivatedRoute,
    private foodItemService: FoodItemService,
    private restaurantService: RestaurantService,
    private router: Router,
      private cdr: ChangeDetectorRef
  ) {
    console.log('🔥 FoodCatalogue CREATED');
  }

  ngOnInit(): void {

    console.log('🔥 FoodCatalogue ngOnInit');

    this.route.paramMap.subscribe(params => {

      const id = params.get('restaurantId');

      console.log('🔥 Route restaurantId:', id);

      if (id) {

        this.restaurantId = Number(id);

        console.log(
          '🔥 Restaurant ID converted to number:',
          this.restaurantId
        );

        this.getFoodItemsByRestaurant(this.restaurantId);

      }

    });

  }

  getFoodItemsByRestaurant(restaurantId: number): void {

    console.log(
      '🔥 STEP 1 - Calling Food Catalogue API with ID:',
      restaurantId
    );

    this.foodItemService
      .getFoodItemsByRestaurant(restaurantId)
      .subscribe({

        next: (data: FoodCataloguePage) => {

          console.log(
            '🔥 STEP 2 - FOOD CATALOGUE API SUCCESS'
          );

          console.log(
            '🔥 Food Items:',
            data.foodItemList
          );

          console.log(
            '🔥 Food Items Count:',
            data.foodItemList?.length
          );

          /*
           * Food Catalogue API is returning the food items,
           * but restaurant is undefined.
           *
           * So we get the restaurant separately.
           */

          this.foodItemResponse = data;
          this.cdr.detectChanges();

          console.log(
            '🔥 Food response assigned:',
            this.foodItemResponse
          );

          // Get all restaurants
          this.restaurantService
            .getAllRestaurants()
            .subscribe({

              next: (restaurants) => {

                console.log(
                  '🔥 ALL RESTAURANTS:',
                  restaurants
                );

                // Find the restaurant matching the URL ID
                // const restaurant = restaurants.find(
                //   r => r.id === restaurantId
                // );

                const restaurant: Restaurant | undefined = restaurants.find(
  (r: Restaurant) => r.id === restaurantId
);

                console.log(
                  '🔥 FOUND RESTAURANT:',
                  restaurant
                );

                if (restaurant) {

                  this.foodItemResponse!.restaurant = restaurant;
                  this.cdr.detectChanges();

                  console.log(
                    '🔥 RESTAURANT ASSIGNED:',
                    this.foodItemResponse!.restaurant
                  );

                } else {

                  console.error(
                    '❌ Restaurant not found for ID:',
                    restaurantId
                  );

                }

              },

              error: (error) => {

                console.error(
                  '❌ RESTAURANT API ERROR:',
                  error
                );

              }

            });

        },

        error: (error) => {

          console.error(
            '🔥 FOOD CATALOGUE API ERROR:',
            error
          );

        },

        complete: () => {

          console.log(
            '🔥 STEP 4 - FOOD CATALOGUE OBSERVABLE COMPLETED'
          );

        }

      });

  }

  increment(food: FoodItem): void {

    food.quantity = (food.quantity ?? 0) + 1;

    const index = this.foodItemCart.findIndex(
      item => item.id === food.id
    );

    if (index === -1) {

      this.foodItemCart.push(food);

    } else {

      this.foodItemCart[index] = food;

    }

  }

  decrement(food: FoodItem): void {

    if ((food.quantity ?? 0) > 0) {

      food.quantity = (food.quantity ?? 0) - 1;

      const index = this.foodItemCart.findIndex(
        item => item.id === food.id
      );

      if (index !== -1) {

        if (food.quantity === 0) {

          this.foodItemCart.splice(index, 1);

        } else {

          this.foodItemCart[index] = food;

        }

      }

    }

  }

  onCheckOut(): void {

    if (!this.foodItemResponse) {

      console.error(
        '❌ Cannot checkout. Food catalogue response is not available.'
      );

      return;

    }

    this.orderSummary = {

      foodItemList: this.foodItemCart,

      restaurant: this.foodItemResponse.restaurant

    };

    console.log(
      '🔥 ORDER SUMMARY:',
      this.orderSummary
    );

    this.router.navigate(
      ['/orderSummary'],
      {
        queryParams: {
          data: JSON.stringify(this.orderSummary)
        }
      }
    );

  }

}