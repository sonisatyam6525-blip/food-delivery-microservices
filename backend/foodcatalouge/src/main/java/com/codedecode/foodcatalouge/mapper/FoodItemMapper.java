package com.codedecode.foodcatalouge.mapper;

import org.mapstruct.Mapper;

import com.codedecode.foodcatalouge.dto.FoodItemDTO;
import com.codedecode.foodcatalouge.entity.FoodItem;

@Mapper(componentModel = "spring")
public interface FoodItemMapper {

    FoodItem mapFoodItemDTOToFoodItem(FoodItemDTO foodItemDTO);

    FoodItemDTO mapFoodItemToFoodItemDto(FoodItem foodItem);
}