import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { K8ExternalIp } from '../../constants/url';

@Injectable({
providedIn: 'root'
})
export class RestaurantService {

private apiUrl = K8ExternalIp+'/resturant/fetchAllResturants';

constructor(private http: HttpClient) { }

// old one is the below code
getAllRestaurants(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`)
    .pipe(
        catchError(this.handleError)
    );
}

// new one suggested by chatgpt 

// getAllRestaurants(): Observable<any> {
// console.log('Calling API:', this.apiUrl);

// return this.http.get<any>(this.apiUrl).pipe(
//     catchError(error => {
//     console.error('API ERROR:', error);
//     return throwError(() => error);
//     })
// );
// }

private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
}
}