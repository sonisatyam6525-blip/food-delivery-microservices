package com.example.resturantlisting;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ResturantService {

    @Autowired
    private ResturantRepo resturantRepo;

    @Autowired
    private resturantMapper resturantMapper; // ✅ same lowercase

    public List<ResturantDto> findAllResturants() {

        List<Resturant> resturants = resturantRepo.findAll();

        return resturants.stream()
                .map(resturantMapper::mapResturantToResturantDTO)
                .collect(Collectors.toList());
    }

	public ResturantDto addResturantInDB(ResturantDto resturantDto) {
		// TODO Auto-generated method stub
		Resturant savedResturant =resturantRepo.save(resturantMapper.mapResturantDTOToResturant(resturantDto));
		return resturantMapper.mapResturantToResturantDTO(savedResturant);
		
	}

	public ResponseEntity<ResturantDto> findResturantById(Integer id) {

	    Resturant resturant =
	            resturantRepo.findById(id).orElse(null);

	    if(resturant == null) {
	        return ResponseEntity.notFound().build();
	    }

	    ResturantDto dto =
	            resturantMapper.mapResturantToResturantDTO(resturant);

	    return ResponseEntity.ok(dto);
	}
}
	