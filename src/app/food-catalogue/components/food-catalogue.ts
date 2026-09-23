import { Component } from '@angular/core';

@Component({
  selector: 'app-food-catalogue',
  standalone: false,
  templateUrl: './food-catalogue.html',
  styleUrl: './food-catalogue.css',
})
export class FoodCatalogue {

  restaurantId: number;
  foodItemResponse: FoodCatalouguePage;
  foodItemCart: FoodItem[] = [];
  orderSummary: FoodCataloguePage;


  constructor(private route: ActivatedRoute, private foodItemService: FoodItemService, private router: Router) {
  }
 
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.restaurantId = +params.get('id');
    });

    this.getFoodItemsByRestaurant(this.restaurantId);
    
  }

  getFoodItemsByRestaurant(restaurant: number) {
    this.foodItemService.getFoodItemsByRestaurant(restaurant).subscribe(
      data => {
        this.foodItemResponse = data;
      }
    )
  }

  increment(food: any) {
    food.quantity++;
    const index = this.foodItemCart.findIndex(item => item.id === food.id);
    if (index === -1) {
      // If record does not exist, add it to the array
      this.foodItemCart.push(food);
    } else {
      // If record exists, update it in the array
      this.foodItemCart[index] = food;
    }
  }

  decrement(food: any) {
    if (food.quantity > 0) {
      food.quantity--;

      const index = this.foodItemCart.findIndex(item => item.id === food.id);
      if (this.foodItemCart[index].quantity == 0) {
        this.foodItemCart.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.foodItemCart[index] = food;
      }

    }
  }

  onCheckOut() {
    this.foodItemCart;
    this.orderSummary = {
      foodItemsList: [],
      restaurant: null
    }
    this.orderSummary.foodItemsList = this.foodItemCart;
    this.orderSummary.restaurant = this.foodItemResponse.restaurant;
    this.router.navigate(['/orderSummary'], { queryParams: { data: JSON.stringify(this.orderSummary) } });
  }




}
