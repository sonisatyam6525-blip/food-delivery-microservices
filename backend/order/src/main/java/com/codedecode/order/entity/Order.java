package com.codedecode.order.entity;

import java.util.ArrayList;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.codedecode.order.dto.FoodItemDTO;
import com.codedecode.order.dto.Resturant;
import com.codedecode.order.dto.UserDto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document("order")
public class Order {

    private Integer orderId;

    @Field("foodItemsList")
    private ArrayList<FoodItemDTO> foodItemsList;

    @Field("resturant")
    private Resturant resturant;

    @Field("userDTO")
    private UserDto userDTO;
}