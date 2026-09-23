package com.codedecode.foodcatalouge.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodItem {


	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private int id;

	    private String item;

	    private String itemDescription;

	    private boolean veg;	

	    private Integer price;

	    private Integer restaurantId;
	    
	    @Column(nullable = false, columnDefinition = "INT DEFAULT 0")
	    private Integer quantity;
	}
	
