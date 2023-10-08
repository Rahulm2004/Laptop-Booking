package com.laptopbooking.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.laptopbooking.demo.dto.UserLoginDTO;
import com.laptopbooking.demo.entity.UserDetails;
import com.laptopbooking.demo.loginmessage.LoginMessage;
import com.laptopbooking.demo.repository.UserRepository;
import com.laptopbooking.demo.serviceinterface.UserInterface;

@Service
public class UserService implements UserInterface{

	@Autowired
	UserRepository ur;
	
	
	@Override
	public void deleteUser(int id) {
		
		ur.deleteById(id);
		
	}
	
    @Override
    public String postUser(UserDetails userDTO) {
 
        UserDetails user = new UserDetails(
 
        		userDTO.getUserid(),
        		userDTO.getFirstname(),
        		userDTO.getLastname(),
        		userDTO.getGender(),
        		userDTO.getEmail(),
        		userDTO.getPassword(),
        		userDTO.getMobileno()
        		
 
        );
        ur.save(user);
 
        return user.getEmail();
    }
    
    @Override
    public LoginMessage  loginUser(UserLoginDTO loginDTO) {
    	
       
        UserDetails user1 = ur.findByEmail(loginDTO.getEmail());
        
       
        
        if (user1 != null) {
        	
            String password = loginDTO.getPassword();
    
            if (password.equals(password)) {
            	
                Optional< UserDetails> user = ur.findOneByEmailAndPassword(loginDTO.getEmail(), password);
                
                if (user.isPresent()) {
                	
                    return new LoginMessage("Login Success", true);
                    
                } 
                else {
                	
                    return new LoginMessage("Password not match", false);
                }
            } 
            else {
 
                return new LoginMessage("Email not exist", false);
            }
        }
        else {
        	
            return new LoginMessage("check your email and password", false);
        }
 
 
    }

	public List<UserDetails> getUserDetails() {
		return ur.findAll();
		
	}
	
	public void deleteuser(int userid)
	{
		ur.deleteById(userid);
	}

	public UserDetails saveUserDetails(UserDetails u)
	{
		return ur.save(u);
	}
	

}
