package com.sufiyan.service;

import java.util.List;

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
	
	public List<Customer> getAllCustomer(){
		return customerRepo.findAll();
	}
	
	public Customer getCustomerById(Long id) {
		return customerRepo.findById(id).orElse(null);
	}
	
	public Customer updateCustomer(Customer customer) {
		return customerRepo.save(customer);
	}
	
	public void deleteCustomerById(Long id) {
		customerRepo.deleteById(id);
	}
}
