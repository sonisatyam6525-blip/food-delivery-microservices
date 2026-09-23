package com.codedecode.order.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto implements Serializable{

    @JsonProperty("id")
    private int userId;

    @JsonProperty("name")
    private String userName;

    @JsonProperty("password")
    private String userPassword;

    private String address;

    private String city;
}