package com.codedecode.userinfo;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User mapUserDTOToUser(UserDTO userDTO);

    UserDTO mapUserToUserDTO(User entity);
}