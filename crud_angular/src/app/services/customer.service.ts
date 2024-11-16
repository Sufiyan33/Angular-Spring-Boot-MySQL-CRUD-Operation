import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:9000/api"];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  postCustomer(customer: any): Observable<any>{
    return this.http.post(BASIC_URL + "/customer", customer);
  }

  getAllCustomer(): Observable<any>{
    return this.http.get(BASIC_URL + "/customer/all")
  }
}
