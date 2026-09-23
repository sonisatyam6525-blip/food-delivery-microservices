package com.example.resturantlisting;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface resturantMapper {

    @Mapping(source = "name", target = "name")
    @Mapping(source = "address", target = "address")
    @Mapping(source = "city", target = "city")
    @Mapping(source = "resturantDescription", target = "resturantDescription")
    @Mapping(target = "id", ignore = true) // for insert
    Resturant mapResturantDTOToResturant(ResturantDto dto);

    @Mapping(source = "id", target = "id")
    @Mapping(source = "name", target = "name")
    @Mapping(source = "address", target = "address")
    @Mapping(source = "city", target = "city")
    @Mapping(source = "resturantDescription", target = "resturantDescription")
    ResturantDto mapResturantToResturantDTO(Resturant entity);
}