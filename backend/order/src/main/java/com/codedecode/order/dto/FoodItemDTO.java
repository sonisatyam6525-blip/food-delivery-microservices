package com.codedecode.order.dto;

import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodItemDTO {

    @Field("foodId")
    private int foodId;

    @Field("item")
    private String item;

    @Field("itemDescription")
    private String itemDescription;

    @Field("veg")
    private Boolean veg;

    @Field("price")
    private Integer price;

    @Field("restaurantId")
    private Integer restaurantId;

    @Field("quantity")
    private Integer quantity;
}