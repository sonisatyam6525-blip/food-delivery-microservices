package com.codedecode.userinfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired 
	UserService userservice;
//	
//	@PostMapping("/addUser")
//	public ResponseEntity<UserDTO> addUser(@RequestBody UserDTO userr){
//		UserDTO savedUser=userservice.addUser(userr);
//		
//		return new ResponseEntity<>(savedUser,HttpStatus.CREATED);
//		
//	}
//	
//}

	@PostMapping("/addUser")
	public ResponseEntity<UserDTO> addUser(@RequestBody UserDTO dto){

	    UserDTO savedUser = userservice.addUser(dto);

	    return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
	}
	
	@GetMapping("/fetchUserById/{userId}")
	public ResponseEntity<UserDTO> fetchUserDetailsById(@PathVariable Integer userId) {

	    UserDTO dto = userservice.fetchUserDetailsById(userId);

	    return ResponseEntity.ok(dto);
	}
}
