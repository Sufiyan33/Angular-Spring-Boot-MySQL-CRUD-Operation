import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [],
  templateUrl: './post-customer.component.html',
  styleUrl: './post-customer.component.css'
})
export class PostCustomerComponent {

  postCustomerForm?: FormGroup;
  constructor(private service: CustomerService, private fb:FormBuilder){}

  ngOnIt(){
    this.postCustomerForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      phone: [null, Validators.required]
    })
  }
}
