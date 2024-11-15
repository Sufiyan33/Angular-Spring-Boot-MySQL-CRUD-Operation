package com.sufiyan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sufiyan.entity.Customer;
import com.sufiyan.service.CustomerService;

@RestController
@RequestMapping("/api")
public class CustomerController {

	@Autowired
	private CustomerService service;
	
	@PostMapping("/customer")
	public Customer postCustomer(@RequestBody Customer customer) {
		return service.postCustomer(customer);
	}
}
