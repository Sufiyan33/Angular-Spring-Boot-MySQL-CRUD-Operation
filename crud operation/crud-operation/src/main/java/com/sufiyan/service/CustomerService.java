package com.sufiyan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sufiyan.entity.Customer;
import com.sufiyan.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepo;
	
	public Customer postCustomer(Customer customer) {
		return customerRepo.save(customer);
	}
}
