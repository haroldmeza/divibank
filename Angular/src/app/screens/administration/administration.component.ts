import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faUser, faEye } from '@fortawesome/free-solid-svg-icons';
import { finalize } from 'rxjs/operators';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit  {

  faUser = faUser
  faEye = faEye
  
  customers : Array<Customer> = [];
  currentCustomer : Customer;

  isEditingCustomerLoans : boolean = false;

  emptyCustomer : Customer = {
    id: 0,
    birthDate : null,
    idNumber : null,
    loans : [],
    name :'Please select a customer',
    email: null,
    sex: null
  }
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private progressIndicator : ProgressService,
    
  ) { }
  
  ngOnInit(): void {
    setTimeout(() => {
    this.progressIndicator.setShowStatus(true);
    this.progressIndicator.setMessage('Loading customers');
    
    this.customerService.loadCustomers().pipe(
      finalize(() => this.progressIndicator.setShowStatus(false))
    ).subscribe(customers => {
      if(customers && customers.length){
        this.customers = [this.emptyCustomer,...customers];
        this.currentCustomer = this.emptyCustomer
      }
    })},1)
  }

  setCurrentCustomer(id: number){
    this.currentCustomer = Object.assign({}, this.customers.find(c=>c.id == id))
  }

  setIsEditingCustomerLoans(value: boolean){
    this.isEditingCustomerLoans = value;
  }

  customerUpdateLoans({id, loansModified}: any){
    this.customers = this.customers.reduce((prev, curr) => {
      if(curr.id == id){
        return [...prev, {...curr, loans: [...loansModified]}]
      }else{
        return [...prev, curr]
      }
    },[]);
    this.setIsEditingCustomerLoans(false)
    this.setCurrentCustomer(0)
  }
}
