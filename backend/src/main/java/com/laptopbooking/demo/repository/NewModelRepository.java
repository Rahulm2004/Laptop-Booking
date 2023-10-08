package com.laptopbooking.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.laptopbooking.demo.entity.NewModel;

@Repository
public interface NewModelRepository extends JpaRepository<NewModel,Integer>{

}
