import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Constant } from '../../const/Constant';

@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-customer.component.html',
  styleUrl: './post-customer.component.css'
})
export class PostCustomerComponent implements OnInit{

  validationMessage: any = Constant.VALIDATING_MESSAGE;
  postCustomerForm: FormGroup = new FormGroup({});
  constructor(private service: CustomerService, private fb:FormBuilder,
    private router: Router
  ){}

  ngOnInit(){
    this.postCustomerForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      phone: [null, Validators.required]
    })
  }

  postCustomer(){
    console.log(this.postCustomerForm.value);
    this.service.postCustomer(this.postCustomerForm.value).subscribe((res)=>{
      console.log(res);
      this.postCustomerForm.reset();
      this.router.navigateByUrl("/");
    })
  }

  onReset(){
    this.postCustomerForm.reset();
  }
}
