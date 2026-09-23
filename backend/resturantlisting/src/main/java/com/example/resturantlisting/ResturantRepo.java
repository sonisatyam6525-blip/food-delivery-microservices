package com.example.resturantlisting;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface ResturantRepo extends JpaRepository<Resturant,Integer>{

	ResponseEntity<ResturantDto> findResturantById(Integer id);
	
	

}
