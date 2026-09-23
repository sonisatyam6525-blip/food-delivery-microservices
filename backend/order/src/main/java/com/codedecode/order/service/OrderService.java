package com.codedecode.order.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.codedecode.order.dto.OrderDTO;
import com.codedecode.order.dto.OrderDTOFromFE;
import com.codedecode.order.dto.UserDto;
import com.codedecode.order.entity.Order;
import com.codedecode.order.mapper.OrderMapper;
import com.codedecode.order.repo.OrderRepo;

@Service
public class OrderService {
	
	@Autowired
	OrderRepo orderRepo;
	
	@Autowired
	SequenceGenerator sequenceGenerator;
	
	@Autowired
	RestTemplate restTemplate;
	
	@Autowired
	OrderMapper orderMapper;

	public OrderDTO saveOrderInDb(OrderDTOFromFE orderDetails) {

	    Integer newOrderID =sequenceGenerator.generateNextOrderId();

	    UserDto userDTO =fetchUserDetailsFromUserId(orderDetails.getUserId());
//imp
	    Order orderToBeSaved = new Order();

	    orderToBeSaved.setOrderId(newOrderID);

	    orderToBeSaved.setFoodItemsList(
	            new ArrayList<>(orderDetails.getFoodItemsList())
	    );

	    orderToBeSaved.setResturant(
	            orderDetails.getResturant()
	    );

	    orderToBeSaved.setUserDTO(userDTO);
	    //imp
	    
	    System.out.println(orderToBeSaved.getFoodItemsList());

	    orderRepo.save(orderToBeSaved);

	    return orderMapper.mapOrderToOrderDTO(orderToBeSaved);
	}

	private UserDto fetchUserDetailsFromUserId(Integer userId) {
		// TODO Auto-generated method stub
		return restTemplate.getForObject("http://resturantlisting/resturant/fetchById/"+userId,UserDto.class);
	}

}
