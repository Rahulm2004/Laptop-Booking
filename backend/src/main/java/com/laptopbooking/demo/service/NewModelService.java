package com.laptopbooking.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.laptopbooking.demo.entity.NewModel;
import com.laptopbooking.demo.repository.NewModelRepository;

@Service
public class NewModelService {

	@Autowired
	NewModelRepository nr;
	
	public List<NewModel> getAllModel()
	{
		return nr.findAll();
	}
}
