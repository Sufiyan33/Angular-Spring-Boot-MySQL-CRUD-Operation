import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from '../const/Constant';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  postCustomer(customer: any): Observable<any>{
    return this.http.post(Constant.BASIC_URL + "/customer", customer);
  }

  getAllCustomer(): Observable<any>{
    return this.http.get(Constant.BASIC_URL + "/customer/all")
  }

  getCustomerById(id: number): Observable<any>{
    return this.http.get(Constant.BASIC_URL + "/customer/" + id)
  }

  updateCustomer(id: number, customer:any): Observable<any>{
    return this.http.put(Constant.BASIC_URL + "/customer/" + id, customer)
  }

  deleteCustomerById(id: number): Observable<any>{
    return this.http.delete(Constant.BASIC_URL + "/customer/" + id)
  }
}
