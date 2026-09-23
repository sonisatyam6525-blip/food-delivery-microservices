package com.example.resturantlisting;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ResturantDto {

    private int id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("address")
    private String address;

    @JsonProperty("city")
    private String city;

    @JsonProperty("resturantDescription")
    private String resturantDescription;	

    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }

    public String getResturantDescription() { return resturantDescription; }
    public void setResturantDescription(String resturantDescription) {
        this.resturantDescription = resturantDescription;
    }
}