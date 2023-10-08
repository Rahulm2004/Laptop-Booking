package com.laptopbooking.demo.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class NewModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="mid",nullable = false)
    private int mid;
	@Column(name="bname",nullable=false)
    private String bname;
	@Column(name="mname",nullable=false)
    private String mname;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="specification")
	private Specification specs;
	public Specification getSpecs() {
		return specs;
	}
	public void setSpecs(Specification specs) {
		this.specs = specs;
	}
	NewModel(){}
	public int getMid() {
		return mid;
	}
	public void setMid(int mid) {
		this.mid = mid;
	}
	public String getBname() {
		return bname;
	}
	public void setBname(String bname) {
		this.bname = bname;
	}
	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	};
	
    
}
