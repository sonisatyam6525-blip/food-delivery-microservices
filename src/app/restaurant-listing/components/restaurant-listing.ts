// import { Component, OnInit } from '@angular/core';
// import { Restaurant } from '../../Shared/models/Restaurant';
// import { RestaurantService } from '../service/restaurant.service';
// import { Router } from '@angular/router';



// @Component({
//   selector: 'app-restaurant-listing',
//   standalone: false,
//   templateUrl: './restaurant-listing.html',
//   styleUrl: './restaurant-listing.css',
// })
// export class RestaurantListing {

// public restaurantList: Restaurant[];

// ngOnInit() {
//     this.getAllRestaurants();
//   }

// constructor(private router: Router, private restaurantService: RestaurantService) { }

// // getAllRestaurants() {
// //     this.restaurantService.getAllRestaurants().subscribe(
// //       data => {
// //         this.restaurantList = data;
// //       }
// //     )
// //   }

// getAllRestaurants() {
//   console.log('1. Calling getAllRestaurants()');

//   this.restaurantService.getAllRestaurants().subscribe({
//     next: (data) => {
//       console.log('2. SUCCESS - API DATA:', data);

//       this.restaurantList = data;

//       console.log('3. RESTAURANT LIST:', this.restaurantList);
//       console.log('4. RESTAURANT COUNT:', this.restaurantList.length);
//     },

//     error: (error) => {
//       console.error('2. ERROR:', error);
//     },

//     complete: () => {
//       console.log('5. Observable completed');
//     }
//   });
// }



//   getRandomNumber(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   getRandomImage(): string {
//     const imageCount = 8; // Adjust this number based on the number of images in your asset folder
//     const randomIndex = this.getRandomNumber(1, imageCount);
//     return `${randomIndex}.jpg`; // Replace with your image filename pattern
//   }

//   onButtonClick(id: number) {
//     this.router.navigate(['/food-catalogue', id]);
//   }

// }

// import { Component } from '@angular/core';
// import { Restaurant } from '../../Shared/models/Restaurant';
// import { RestaurantService } from '../service/restaurant.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-restaurant-listing',
//   standalone: false,
//   templateUrl: './restaurant-listing.html',
//   styleUrl: './restaurant-listing.css',
// })
// export class RestaurantListing {

//   public restaurantList: Restaurant[] = [];

//   constructor(
//     private router: Router,
//     private restaurantService: RestaurantService
//   ) {
//     console.log('🔥 RestaurantListing CREATED');
//   }

//   ngOnInit() {
//     console.log('🔥 RestaurantListing ngOnInit');
//     this.getAllRestaurants();
//   }

//   getAllRestaurants() {
//     console.log('🔥 Calling API');

//     this.restaurantService.getAllRestaurants().subscribe({
//       next: data => {
//         console.log('🔥 API DATA:', data);

//         this.restaurantList = data;

//         console.log(
//           '🔥 restaurantList length:',
//           this.restaurantList.length
//         );
//       },

//       error: error => {
//         console.error('🔥 API ERROR:', error);
//       }
//     });
//   }

//   // 👇 ADD THIS METHOD
//   getRandomNumber(min: number, max: number): number {
//     return Math.floor(
//       Math.random() * (max - min + 1)
//     ) + min;
//   }

//   // 👇 ADD THIS METHOD
//   getRandomImage(): string {
//     const imageCount = 8;
//     const randomIndex = this.getRandomNumber(1, imageCount);

//     return `${randomIndex}.jpg`;
//   }

//   onButtonClick(id: number) {
//     this.router.navigate(['/food-catalogue', id]);
//   }
// }


import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
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

    console.log('🔥 Calling API');

    this.restaurantService.getAllRestaurants().subscribe({
      
      next: (data: Restaurant[]) => {

        console.log('🔥 API DATA:', data);

        this.restaurantList = data;

        console.log(
          '🔥 restaurantList length:',
          this.restaurantList.length
        );

        // Force Angular to update the HTML
        this.cdr.detectChanges();
      },

      error: (error) => {
        console.error('🔥 API ERROR:', error);
      },

      complete: () => {
        console.log('🔥 Observable completed');
      }
    });
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(
      Math.random() * (max - min + 1)
    ) + min;
  }

  getRandomImage(): string {
    const imageCount = 8;
    const randomIndex = this.getRandomNumber(1, imageCount);

    return `${randomIndex}.jpg`;
  }

  onButtonClick(id: number): void {
    this.router.navigate(['/food-catalogue', id]);
  }
}