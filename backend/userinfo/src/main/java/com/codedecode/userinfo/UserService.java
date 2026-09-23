package com.codedecode.userinfo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepo repo;

    public UserDTO addUser(UserDTO dto){

        User user = new User();

        user.setUserName(dto.getUserName());
        user.setUserPassword(dto.getUserPassword());
        user.setAddress(dto.getAddress());
        user.setCity(dto.getCity());

        User savedUser = repo.save(user);

        return new UserDTO(
                savedUser.getUserId(),
                savedUser.getUserName(),
                savedUser.getUserPassword(),
                savedUser.getAddress(),
                savedUser.getCity()
        );
    }

    public UserDTO fetchUserDetailsById(Integer userId) {

        User user = repo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return new UserDTO(
                user.getUserId(),
                user.getUserName(),
                user.getUserPassword(),
                user.getAddress(),
                user.getCity()
        );
    }
		
	}