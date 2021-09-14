import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { sexs } from '../../const-values'
import { 
  faUser, 
  faMailBulk,
  faCheck,
  faExclamationTriangle,
  faIdCard,
  faPlus,
  faCalendar
} from '@fortawesome/free-solid-svg-icons';
import { DateValidator } from 'src/app/validators/dateValidaator';
import { CustomerService } from 'src/app/services/customer.service';
import { ProgressService } from 'src/app/services/progress.service';
import { getErrorsUl } from 'src/app/utils';
import { pipe, throwError } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  sexs = sexs;

  faUser = faUser;
  faMailBulk = faMailBulk;
  faIdCard = faIdCard;
  faPlus = faPlus;
  faCheck = faCheck;
  faExclamationTriangle = faExclamationTriangle;
  faCalendar = faCalendar;

  alert : any

  registerForm = this.fb.group({
    Sex: [this.sexs[0].sex, Validators.required],
    IdNumber : ['', Validators.required],
    Name : ['', Validators.required],
    Email : ['', Validators.email],
    BirthDate : ['', DateValidator.localeDate],
  });
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private progressIndicator : ProgressService
  ) { }



  ngOnInit(): void {
  }

  checkTouchedOrDirty(element: any): boolean{
    let dirty: boolean = this.registerForm.get(element)?.dirty ?? false;
    let touched : boolean = this.registerForm.get(element)?.touched ?? false;
    return dirty || touched
  }

  getValid(element: string): boolean{
    if(!this.checkTouchedOrDirty(element)) return true;
    let isValid: boolean = this.registerForm.get(element)?.valid ?? false;
    return isValid;
  }

  getIcon(): any{
    return this.sexs.find(s=> s.sex == this.registerForm.get('Sex').value).icon
  }

  submitForm(){
    this.resetAlert();
    this.progressIndicator.setShowStatus(true);
    this.progressIndicator.setMessage("Creating customer")
    if(this.registerForm.valid){
      this.customerService.addCustomer({...this.registerForm.value}).pipe(
        catchError(err => {
          this.showAlert(`Customer creation ${err.title ?? ''}`, 'danger', getErrorsUl(err.error ?? err))
          return throwError(err);
        }),
        finalize(() => this.progressIndicator.setShowStatus(false))
      ).subscribe(
        res => {
          this.showAlert("Customer creation", 'success', "Customer was created sucessfully");
          this.resetForm();
      },err => {
      },() => {})
    }
  }

  showAlert(header : string, type: string, message: string): void{
    this.alert = {
      header,
      type,
      message
    }
  }

  resetAlert() : void{
    this.alert = null;
  }

  resetForm(){
    this.registerForm.reset();
    this.registerForm.patchValue({
      Sex: this.sexs[0].sex,
      IdNumber : '',
      Name : '',
      Email : '',
      BirthDate : '',
    })
  }
}
