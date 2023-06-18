import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranserviceService } from '../transervice.service';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent {
  newexpense:any={
    "name": "",
    "amount": 0,
    "date": 0,
    "desc": ""
  }
  expenseForm = this.fb.group({
    name : ['',[Validators.required]],
    amount : ['',[Validators.required, Validators.min(1)]],
    desc : ['',[Validators.required]],
    date : ['',[Validators.required]]
  })

 
  constructor(private fb: FormBuilder, private http: HttpClient,  private router:Router, private transService: TranserviceService) {}

  onSubmit(){
    console.log(this.expenseForm.status)
    if(this.expenseForm.valid)
    {
      this.newexpense = this.expenseForm.value;
      this.transService.createExpense(this.newexpense);
    }

  }

  get name(){
    return this.expenseForm.get('name');
  }

  get amount(){
    return this.expenseForm.get('amount');
  }

  get desc(){
    return this.expenseForm.get('desc');
  }

  get date(){
    return this.expenseForm.get('date');

  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  getErrorMessageAmt(){
    return 'Amount must be greater than 10';
  }


}
