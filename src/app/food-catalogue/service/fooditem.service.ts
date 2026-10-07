// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { API_URL_UD } from '../../constants/url';

// @Injectable({
//   providedIn: 'root'
// })
// export class FoodItemService {

//   private apiUrl =
//     API_URL_UD + '/foodCatalouge/fetchRestaurantAndFoodItemsById/';

//   constructor(private http: HttpClient) { }

//   getFoodItemsByRestaurant(id: number): Observable<any> {

//     console.log(
//       'Calling Food Catalogue API with restaurant ID:',
//       id
//     );

//     console.log(
//       'Food Catalogue URL:',
//       `${this.apiUrl}${id}`
//     );

//     return this.http
//       .get<any>(`${this.apiUrl}${id}`)
//       .pipe(
//         catchError(this.handleError)
//       );
//   }

//   private handleError(error: any) {

//     console.error(
//       'Food Catalogue API error:',
//       error
//     );

//     return throwError(() => error);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { API_URL_UD } from '../../constants/url';
import { FoodCataloguePage } from '../../Shared/models/FoodCatalouguePage';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  private apiUrl =
    API_URL_UD + '/foodCatalouge/fetchRestaurantAndFoodItemsById/';

  constructor(private http: HttpClient) {}

  getFoodItemsByRestaurant(
    id: number
  ): Observable<FoodCataloguePage> {

    const url = `${this.apiUrl}${id}`;

    console.log('🔥 Calling Food Catalogue API with restaurant ID:', id);
    console.log('🔥 Food Catalogue URL:', url);

    return this.http
      .get<any>(url)
      .pipe(

        map((response: any) => {

          console.log('🔥 SERVICE RAW RESPONSE:', response);

          /*
           * Sometimes the response can come as a JSON string.
           * Convert it into an object if required.
           */
          const data =
            typeof response === 'string'
              ? JSON.parse(response)
              : response;

          console.log('🔥 SERVICE PARSED DATA:', data);

          console.log(
            '🔥 SERVICE FOOD LIST:',
            data?.foodItemList
          );

          console.log(
            '🔥 SERVICE RESTAURANT:',
            data?.restaurant
          );

          /*
           * Create a clean FoodCataloguePage object.
           */
          const result: FoodCataloguePage = {

            foodItemList: data?.foodItemList ?? [],

            restaurant: data?.restaurant

          };

          console.log(
            '🔥 SERVICE FINAL RESULT:',
            result
          );

          console.log(
            '🔥 SERVICE FINAL RESTAURANT:',
            result.restaurant
          );

          return result;

        }),

        catchError((error) => {

          console.error(
            '🔥 Food Catalogue API error:',
            error
          );

          return throwError(() => error);

        })

      );
  }
}