package com.laptopbooking.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.laptopbooking.demo.dto.UserLoginDTO;
import com.laptopbooking.demo.entity.UserDetails;
import com.laptopbooking.demo.loginmessage.LoginMessage;
import com.laptopbooking.demo.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {
    @Autowired
	UserService us;
    
    @GetMapping("/getuser")
    public List<UserDetails> getUserDetails()
    {
    	return us.getUserDetails();
    }
    
    @PostMapping("/saveuser")
    
    public UserDetails saveUserDetails(@RequestBody UserDetails u)
    {
    	return us.saveUserDetails(u);
    }
    
    @DeleteMapping("/deleteuser/{userid}")
    public void deleteUser(@PathVariable int userid)
    { 
    	 us.deleteUser(userid);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDTO loginDTO)
    {
   	 LoginMessage loginMessage=us.loginUser(loginDTO);
   	 
   	 return ResponseEntity.ok(loginMessage);
    }
}
