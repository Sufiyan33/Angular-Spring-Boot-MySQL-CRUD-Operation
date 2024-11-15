package com.sufiyan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@GetMapping("/customer/all")
	public List<Customer> findAllCustomer(){
		return service.getAllCustomer();
	}
	
	@GetMapping("/customer/{id}")
	public ResponseEntity<Customer> fetchCustomerById(@PathVariable Long id){
		Customer customerObj = service.getCustomerById(id);
		if(customerObj == null)
			return ResponseEntity.notFound().build();
		return ResponseEntity.ok(customerObj);
	}
}
