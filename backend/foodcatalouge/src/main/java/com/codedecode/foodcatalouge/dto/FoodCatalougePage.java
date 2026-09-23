package com.codedecode.foodcatalouge.dto;

import java.util.List;

import com.codedecode.foodcatalouge.entity.FoodItem;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodCatalougePage {
	
	private List<FoodItem> foodItemList;
	
	private Resturant resturant;
	
	
	

}
