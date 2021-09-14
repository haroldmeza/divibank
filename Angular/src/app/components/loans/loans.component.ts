import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { 
  faTimes, 
  faSave, 
  faPlus ,
  faTrashAlt,
  faMoneyBill,
  faCheck,
  faExclamationTriangle
 } from '@fortawesome/free-solid-svg-icons';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgressService } from 'src/app/services/progress.service';
import { Loan } from 'src/app/model/loan';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { CustomerService } from 'src/app/services/customer.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  faTimes = faTimes
  faSave = faSave
  faPlus = faPlus
  faTrashAlt = faTrashAlt
  faMoneyBill = faMoneyBill
  faCheck = faCheck
  faExclamationTriangle = faExclamationTriangle

  @Input()
  customer : Customer;
  @Output()
  onCancel = new EventEmitter<boolean>()
  @Output()
  onSave = new EventEmitter<{id: number,loansModified :Array<Loan>}>()

  countLoans : number = 0

  loansForm = this.fb.group({
    loans : this.fb.array([])
  });

  loans = this.loansForm.get('loans') as FormArray;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private progressIndicator : ProgressService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.loadLoans();
    this.countLoans = this.loans.length
  }

  async loadLoans(){
    this.customer.loans.forEach(l => {
      this.loans.push(this.addLoan(l))
    })
  }

  addLoan(loan: Loan): FormGroup{
    return this.fb.group({
      id : [loan.id, Validators.required],
      customerId : [loan.customerId, [Validators.required]],
      amount : [loan.amount, [
        Validators.required, 
        Validators.min(1),
        RxwebValidators.numeric({allowDecimal:true})
      ]],
    });
  }

  cancelEdition(){
    this.onCancel.emit(false);
  }

  submitForm(){
    
      this.progressIndicator.setShowStatus(true);
      this.progressIndicator.setMessage("Updating loans")
      let customerToUpdate = Object.assign({}, this.customer);
      customerToUpdate.loans = [...this.loans.value];
      customerToUpdate.loans = customerToUpdate.loans.map(c =>{
        return {
          ...c,
          amount : +c.amount
        }
      })
      this.customerService.updateLoans(customerToUpdate).pipe(
        finalize(() => this.progressIndicator.setShowStatus(false))
      ).subscribe(r => this.onSave.emit({ id: this.customer.id, loansModified: r ?? []}))
    
  }

  addNewLoan(){
    let newLoan : Loan = {
      id: 0,
      customerId : this.customer.id,
      amount : 0
    }
    this.loans.push(this.addLoan(newLoan))
  }

  deleteLoan(index: number): void{
    this.loans.removeAt(index);
  }

  getValid(formArray: FormArray, index: number, element: string): boolean{
    let isValid: boolean = formArray.controls[index].get(element)?.valid ?? false;
    return isValid;
  }

  checkTouchedOrDirty(formArray: FormArray, index: number, name: string) : boolean{
    let dirty: boolean = formArray.controls[index].get(name)?.dirty ?? false;
    let touched : boolean = formArray.controls[index].get(name)?.touched ?? false;
    return dirty || touched
  }


  
  isDisableForm(){
    if(this.loans.length != this.countLoans){
      return false;
    }

    if(!this.loansForm.touched){
      return true
    }

    let isDisabled = false;
    this.loans.controls.forEach( l =>{
      if(l.get('amount').invalid){
        isDisabled = true
      }
    })
    return isDisabled;
  }

}
