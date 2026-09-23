package com.codedecode.foodcatalouge.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodItemDTO {
	
	 private int id;

	    private String item;

	    private String itemDescription;

	    private boolean veg;

	    private Integer price;

	    private Integer restaurantId;
	    private Integer quantity;

}
