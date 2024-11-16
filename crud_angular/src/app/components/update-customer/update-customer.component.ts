import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{
  
  updateCustomerForm: FormGroup= new FormGroup({});

  id!: number;
  constructor(private route: ActivatedRoute, 
    private service: CustomerService, private fb: FormBuilder, private router: Router){
      this.id = this.route.snapshot.params['id'];
    }

 
  ngOnInit(): void {
    this.updateCustomerForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      phone: [null, Validators.required]
    })

    this.getCustomerUsingId();
  }
  getCustomerUsingId(){
    this.service.getCustomerById(this.id).subscribe((res) =>{
      console.log(res);
      this.updateCustomerForm.patchValue(res);
    })
  }

  updateCustomerData(){
    this.service.updateCustomer(this.id, this.updateCustomerForm.value).subscribe((res) =>{
      console.log(res);
      this.updateCustomerForm.reset();
      this.router.navigateByUrl("/");
    })
  }
}
