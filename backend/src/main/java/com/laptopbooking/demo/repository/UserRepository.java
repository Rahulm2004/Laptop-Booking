package com.laptopbooking.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.laptopbooking.demo.entity.UserDetails;

@EnableJpaRepositories
@Repository
public interface UserRepository extends JpaRepository<UserDetails,Integer>{
	UserDetails findByEmail(String email);
	Optional<UserDetails> findOneByEmailAndPassword(String email,String password);
}
