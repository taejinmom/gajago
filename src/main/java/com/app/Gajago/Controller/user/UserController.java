package com.app.Gajago.Controller.user;

import com.app.Gajago.dto.user.UserDto;
import com.app.Gajago.service.user.UserService;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserService userService;


    @PostMapping("/api/logintest")
    public ResponseEntity<Boolean> logintest(@RequestBody UserDto user) {
        System.out.println("UserController.logintest");
        if(userService.loginCheck(user) > 0){
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @PostMapping("/api/userInsert")
    public ResponseEntity<String> userInsert(@RequestBody UserDto user) {
        System.out.println("UserController.userInsert");

        userService.userInsert(user);
        return new ResponseEntity<>("Success!", HttpStatus.OK);
    }
    @GetMapping("/api/test")
    public ResponseEntity<String> test() {
        System.out.println("UserController.test");

        return new ResponseEntity<>("Success",HttpStatus.OK);
    }
}
