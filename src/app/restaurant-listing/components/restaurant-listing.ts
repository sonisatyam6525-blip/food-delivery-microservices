import {
  Component,
  ChangeDetectorRef,
  OnInit
} from '@angular/core';

import { Restaurant } from '../../Shared/models/Restaurant';
import { RestaurantService } from '../service/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  standalone: false,
  templateUrl: './restaurant-listing.html',
  styleUrl: './restaurant-listing.css'
})
export class RestaurantListing implements OnInit {

  public restaurantList: Restaurant[] = [];

  // Store images separately.
  // Do NOT call getRandomImage() from HTML.
  public restaurantImages: string[] = [];

  constructor(
    private router: Router,
    private restaurantService: RestaurantService,
    private cdr: ChangeDetectorRef
  ) {

    console.log('🔥 RestaurantListing CREATED');

  }

  ngOnInit(): void {

    console.log('🔥 RestaurantListing ngOnInit');

    this.getAllRestaurants();

  }

  getAllRestaurants(): void {

    console.log('🔥 STEP 1 - getAllRestaurants() STARTED');

    this.restaurantService.getAllRestaurants().subscribe({

      next: (data: Restaurant[]) => {

        console.log('🔥 STEP 2 - API SUCCESS');

        console.log('🔥 API DATA:', data);

        console.log(
          '🔥 API DATA LENGTH:',
          data.length
        );

        // Assign restaurant data
        this.restaurantList = data;

        // Generate ONE random image for each restaurant
        this.restaurantImages = data.map(() => {

          return '/restaurant%20pics/' + this.getRandomImage();

        });

        console.log(
          '🔥 STEP 3 - restaurantList ASSIGNED:',
          this.restaurantList
        );

        console.log(
          '🔥 restaurantList LENGTH:',
          this.restaurantList.length
        );

        console.log(
          '🔥 Restaurant Images:',
          this.restaurantImages
        );

        // IMPORTANT
        // Force Angular to update the view
        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error(
          '🔥 STEP ERROR - API FAILED'
        );

        console.error(
          '🔥 ERROR:',
          error
        );

      },

      complete: () => {

        console.log(
          '🔥 STEP 4 - Observable COMPLETED'
        );

      }

    });

  }

  getRandomNumber(
    min: number,
    max: number
  ): number {

    return Math.floor(
      Math.random() * (max - min + 1)
    ) + min;

  }

  getRandomImage(): string {

    const imageCount = 8;

    const randomIndex = this.getRandomNumber(
      1,
      imageCount
    );

    return `${randomIndex}.jpg`;

  }

  onButtonClick(id: number): void {

    console.log(
      '🔥 Restaurant selected:',
      id
    );

    this.router.navigate(
      ['/food-catalogue', id]
    );

  }

}