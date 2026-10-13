package com.codedecode.order.dto;

import lombok.AllArgsConstructor;

import com.fasterxml.jackson.annotation.JsonAlias;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTOFromFE {

	 @JsonAlias("foodItemList")
    private List<FoodItemDTO> foodItemsList;

    private Integer userId;

    @JsonAlias("restaurant")
    private Resturant resturant;
}