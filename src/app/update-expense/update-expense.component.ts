import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranserviceService } from '../transervice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent {

  expenseId:any;
  expense:any=[]
  expenseForm = this.fb.group({
    name : ['',[Validators.required]],
    amount : ['',[Validators.required, Validators.min(1)]],
    desc : ['',[Validators.required]],
    date : ['',[Validators.required]]
  })

 
constructor(private fb: FormBuilder, private http: HttpClient,  private router:Router, private transService: TranserviceService, private route: ActivatedRoute) {}

  

  ngOnInit(): void{
      this.expenseId = this.route.snapshot.params['id'];

      this.http.get('https://648a952117f1536d65e94eb1.mockapi.io/expense'+'/'+this.expenseId) .subscribe((val: any) => {
        this.expenseForm.patchValue(val);
        
    });

  }
  
  onSubmit(){
    if (this.expenseForm.valid) {
      const newExpense = this.expenseForm.value;
    
    this.transService.updatateExpense(this.expenseId,newExpense).subscribe(()=>{
      this.router.navigate(['/expenselist'])

    });
    // this.getMovie();
    //this.goToEmployeeList();
  }
    
  }

  goToEmployeeList(){
    };

  getMovie(){

      this.http
        .get('https://648a952117f1536d65e94eb1.mockapi.io/movies')
        .subscribe((val: any) => {
          this.expense = val;
          console.log(val);
        });
  
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
