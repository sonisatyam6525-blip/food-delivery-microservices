package com.example.resturantlisting;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

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
@RequestMapping("/resturant")
@CrossOrigin
public class ResturantController {

    @Autowired
    private ResturantService resturantService;
    
    @GetMapping("/test")
    public String test() {
        return "Restaurant controller is working";
    }

    @GetMapping("/fetchAllResturants")
    public ResponseEntity<List<ResturantDto>> fetchAllResturants() {

        List<ResturantDto> allResturants = resturantService.findAllResturants(); // ✅ FIXED

        return new ResponseEntity<>(allResturants, HttpStatus.OK);
    }
    @PostMapping(value = "/addResturant", consumes = "application/json", produces = "application/json")
    public ResponseEntity<ResturantDto> saveResturant(@RequestBody ResturantDto dto) {

        System.out.println("DTO name: " + dto.getName()); // debug

        ResturantDto saved = resturantService.addResturantInDB(dto);

        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
    
    @GetMapping("/fetchById/{id}")
    public ResponseEntity<ResturantDto> findResturantById(@PathVariable Integer id)
    { 
    	
    	return resturantService.findResturantById(id);
    }
    
}
//    @PostMapping("/addResturant")
//    public ResponseEntity<ResturantDto> saveResturant(@RequestBody ResturantDto dto) {
//
//        System.out.println("Controller DTO: " + dto); // 👈 ADD THIS
//
//        ResturantDto saved = resturantService.addResturantInDB(dto);
//
//        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
//    }
    
//    @PostMapping("/addResturant")
//    public String test(@RequestBody String body) {
//        System.out.println("RAW BODY: " + body);
//        return body;
//    }

    	

    
    