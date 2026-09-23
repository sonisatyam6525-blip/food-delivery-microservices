package com.codedecode.foodcatalouge.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codedecode.foodcatalouge.entity.FoodItem;

@Repository
public interface FoodItemRepo extends JpaRepository<FoodItem, Integer> {

    List<FoodItem> findByRestaurantId(Integer restaurantId);

}