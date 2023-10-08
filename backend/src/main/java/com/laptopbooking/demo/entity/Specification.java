package com.laptopbooking.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Specification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sid",nullable = false)
    private int sid;
    @Column(name = "backlight",nullable = false)
    private String backlight;
    @Column(name = "fingerprint",nullable = false)
    private String fingerprint;
    @Column(name = "screensize",nullable = false)
    private String screensize;
    Specification(){}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getBacklight() {
		return backlight;
	}
	public void setBacklight(String backlight) {
		this.backlight = backlight;
	}
	public String getFingerprint() {
		return fingerprint;
	}
	public void setFingerprint(String fingerprint) {
		this.fingerprint = fingerprint;
	}
	public String getScreensize() {
		return screensize;
	}
	public void setScreensize(String screensize) {
		this.screensize = screensize;
	}
    
}
