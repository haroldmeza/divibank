import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { Loan } from '../model/loan';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url:string = environment.apiEndPoint;

  constructor(private http: HttpClient) { }

  addCustomer(customer : any): Observable<Customer>{
    return this.http.post<Customer>(`${this.url}`, customer);
  }

  loadCustomers(): Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(`${this.url}`);
  }

  updateLoans(customer : Customer): Observable<Array<Loan>> | null{
    return this.http.post<Array<Loan>>(`${this.url}/updateLoans`, customer);
  }
}
