import { Component, OnInit } from '@angular/core';
import { OrderDTO } from '../model/OrderDTO';
import { OrderService } from '../service/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  standalone: false,
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})
export class OrderSummary implements OnInit {

  orderSummary?: OrderDTO;
  total: number = 0;
  showDialog: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

 
ngOnInit(): void {
  const data = this.route.snapshot.queryParams['data'];

  if (!data) {
    console.error('Order data not found in URL');
    return;
  }

  try {
    const parsedData: OrderDTO = JSON.parse(data);



    
try {
  // 1. Read the order data passed from Food Catalogue
  const parsedData: OrderDTO = JSON.parse(data);

  // 2. Debug: Check the quantity received
  console.log('📦 RECEIVED ITEMS:', parsedData.foodItemList);

  parsedData.foodItemList?.forEach(item => {
    console.log(
      '🍔 ITEM:', item.item,
      'QUANTITY:', item.quantity,
      'PRICE:', item.price
    );
  });

  // 3. Assign the user ID and order data
  parsedData.userId = 1;
  this.orderSummary = parsedData;

  // 4. Calculate the total
  this.total = (parsedData.foodItemList ?? []).reduce(
    (accumulator, item) => {
      return accumulator +
        ((item.quantity ?? 0) * (item.price ?? 0));
    },
    0
  );

  // 5. Debug: Check the calculated total
  console.log('💰 TOTAL AMOUNT:', this.total);

} catch (error) {
  console.error('Failed to parse order data:', error);
}




    parsedData.userId = 1;
    this.orderSummary = parsedData;

    console.log('ORDER SUMMARY RECEIVED:', this.orderSummary);

    this.total = (parsedData.foodItemList ?? []).reduce(

      (accumulator, item) => {
        return accumulator +
          ((item.quantity ?? 0) * (item.price ?? 0));
      },
      0
    );


    



    console.log('TOTAL AMOUNT:', this.total);

  } catch (error) {
    console.error('Failed to parse order data:', error);
  }
}


  saveOrder(): void {

    if (!this.orderSummary) {
      console.error('❌ Cannot save order. Order summary is unavailable.');
      return;
    }

    this.orderService.saveOrder(this.orderSummary)
      .subscribe({
        next: (response) => {
          console.log('✅ Order saved successfully:', response);
          this.showDialog = true;
        },

        error: (error) => {
          console.error('❌ Failed to save order:', error);
        }
      });
  }

  closeDialog(): void {
    this.showDialog = false;
    this.router.navigate(['/']);
  }
}