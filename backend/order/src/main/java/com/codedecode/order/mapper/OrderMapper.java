package com.codedecode.order.mapper;

import org.mapstruct.Mapper;

import com.codedecode.order.dto.OrderDTO;
import com.codedecode.order.entity.Order;

@Mapper(componentModel = "spring")

public interface OrderMapper {

	Order mapOrderDTOToOrder(OrderDTO orderDTO);

	OrderDTO mapOrderToOrderDTO(Order order);
	}

//
//package com.codedecode.order.mapper;
//
//import org.mapstruct.Mapper;
//import org.mapstruct.Mapping;
//
//import com.codedecode.order.dto.OrderDTO;
//import com.codedecode.order.entity.Order;
//
//@Mapper(componentModel = "spring")
//public interface OrderMapper {
//
//    Order mapOrderDTOToOrder(OrderDTO orderDTO);
//
//    @Mapping(source = "resturant", target = "resturant")
//    @Mapping(source = "userDTO", target = "userDTO")
//    OrderDTO mapOrderToOrderDTO(Order order);
//}