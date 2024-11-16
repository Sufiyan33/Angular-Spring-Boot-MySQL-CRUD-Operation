import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-get-all-customer',
  standalone: true,
  imports: [],
  templateUrl: './get-all-customer.component.html',
  styleUrl: './get-all-customer.component.css'
})
export class GetAllCustomerComponent implements OnInit {

  constructor(private service: CustomerService){}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.service.getAllCustomer().subscribe((res)=>{
      console.log(res);
    })
  }
}
