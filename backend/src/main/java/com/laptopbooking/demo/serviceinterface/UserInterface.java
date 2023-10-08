package com.laptopbooking.demo.serviceinterface;

import com.laptopbooking.demo.dto.UserLoginDTO;
import com.laptopbooking.demo.entity.UserDetails;
import com.laptopbooking.demo.loginmessage.LoginMessage;

public interface UserInterface {
	
	String postUser(UserDetails UserDTO);
	void deleteUser(int id);
	LoginMessage loginUser(UserLoginDTO loginDTO);
	
}
