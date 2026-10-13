package com.codedecode.foodcatalouge.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codedecode.foodcatalouge.dto.FoodCatalougePage;
import com.codedecode.foodcatalouge.dto.FoodItemDTO;
import com.codedecode.foodcatalouge.service.FoodCatalogueService;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/foodCatalouge")
@CrossOrigin(origins = "http://localhost:4200")
public class FoodCatalougeController {

    @Autowired
    FoodCatalogueService foodCatalougeService;
    

    @PostMapping("/addFoodItem")
    public ResponseEntity<FoodItemDTO> addFoodItem(
            @RequestBody FoodItemDTO foodItemDTO) {

        FoodItemDTO foodItemSaved =
                foodCatalougeService.addFoodItem(foodItemDTO);

        return new ResponseEntity<>(foodItemSaved, HttpStatus.CREATED);
    }
    
    
    @GetMapping("/fetchRestaurantAndFoodItemsById/{restaurantId}")
    public ResponseEntity<FoodCatalougePage> fetchRestauDetailsWithFoodMenu(
            @PathVariable Integer restaurantId) {

        FoodCatalougePage foodCatalougePage =
                foodCatalougeService.fetchFoodCataloguePageDetails(restaurantId);

        return new ResponseEntity<>(foodCatalougePage, HttpStatus.OK);
    }
}