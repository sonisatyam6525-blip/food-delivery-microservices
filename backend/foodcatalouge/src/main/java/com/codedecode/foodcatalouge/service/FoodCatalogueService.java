package com.codedecode.foodcatalouge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.codedecode.foodcatalouge.dto.FoodCatalougePage;
import com.codedecode.foodcatalouge.dto.FoodItemDTO;
import com.codedecode.foodcatalouge.dto.Resturant;
import com.codedecode.foodcatalouge.entity.FoodItem;
import com.codedecode.foodcatalouge.mapper.FoodItemMapper;
import com.codedecode.foodcatalouge.repo.FoodItemRepo;

@Service
public class FoodCatalogueService {
	
	@Autowired
	FoodItemRepo foodItemRepo;
	
	  @Autowired
	  private FoodItemMapper foodItemMapper;
	  
	  @Autowired
	  RestTemplate restTemplate;
	  
	  
	public FoodItemDTO addFoodItem(FoodItemDTO foodItemDTO) {

		  System.out.println("DTO QUANTITY = "
		            + foodItemDTO.getQuantity());

		    FoodItem foodItem =
		            foodItemMapper.mapFoodItemDTOToFoodItem(foodItemDTO);

		    System.out.println("ENTITY QUANTITY = "
		            + foodItem.getQuantity());
		
		
	    FoodItem foodItemSavedInDB =
	            foodItemRepo.save(
	            		foodItemMapper.mapFoodItemDTOToFoodItem(foodItemDTO)
	            );
	    
	    

	    return foodItemMapper.mapFoodItemToFoodItemDto(foodItemSavedInDB);
	}





	public FoodCatalougePage fetchFoodCataloguePageDetails(Integer restaurantId) {
		// TODO Auto-generated method stub
		
		 List<FoodItem> foodItemList =
		            fetchFoodItemList(restaurantId);

		    Resturant resturant =
		            fetchRestaurantDetailsFromRestaurantMS(restaurantId);

		    return createFoodCataloguePage(foodItemList, resturant);
	}


	private List<FoodItem> fetchFoodItemList(Integer restaurantId) {
		// TODO Auto-generated method stub
		return foodItemRepo.findByRestaurantId(restaurantId);
	}


	private Resturant fetchRestaurantDetailsFromRestaurantMS(Integer restaurantId) {
		// TODO Auto-generated method stub
		return restTemplate.getForObject("http://resturantlisting/resturant/fetchById/"+restaurantId, Resturant.class);
	}

	private FoodCatalougePage createFoodCataloguePage(List<FoodItem> foodItemList, Resturant resturant) {
		// TODO Auto-generated method stub
		
		FoodCatalougePage foodCataloguePage = new FoodCatalougePage();

		foodCataloguePage.setFoodItemList(foodItemList);

		foodCataloguePage.setResturant(resturant);

		return foodCataloguePage;
		
	}





	





	
}
