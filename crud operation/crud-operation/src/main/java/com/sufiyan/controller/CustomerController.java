package com.sufiyan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	
	@PutMapping("/customer/{id}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer customer){
		Customer existingCustomer = service.getCustomerById(id);
		if(existingCustomer == null)
			return ResponseEntity.notFound().build();
		existingCustomer.setEmail(customer.getEmail());
		existingCustomer.setFirstName(customer.getFirstName());
		existingCustomer.setLastName(customer.getLastName());
		existingCustomer.setPhone(customer.getPhone());
		Customer updatedCustomer = service.updateCustomer(existingCustomer);
		return ResponseEntity.ok(updatedCustomer);
	}
}
