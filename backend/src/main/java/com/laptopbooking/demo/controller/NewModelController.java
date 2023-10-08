package com.laptopbooking.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.laptopbooking.demo.entity.NewModel;
import com.laptopbooking.demo.service.NewModelService;

@RestController
public class NewModelController {
	@Autowired
     NewModelService ns;
	@GetMapping("/getmodel")
	public List<NewModel> getAllModel()
	{
		return ns.getAllModel();
	}
     
     
}
