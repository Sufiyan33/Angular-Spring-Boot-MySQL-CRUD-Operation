import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{

  id!: number;
  constructor(private route: ActivatedRoute, 
    private service: CustomerService){
      this.id = this.route.snapshot.params['id'];
    }

 
  ngOnInit(): void {
    this.getCustomerUsingId();
  }
  getCustomerUsingId(){
    this.service.getCustomerById(this.id).subscribe((res) =>{
      console.log(res);
    })
  }
}
