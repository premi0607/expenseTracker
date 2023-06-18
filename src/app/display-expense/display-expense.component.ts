import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranserviceService } from '../transervice.service';

@Component({
  selector: 'app-display-expense',
  templateUrl: './display-expense.component.html',
  styleUrls: ['./display-expense.component.css']
})
export class DisplayExpenseComponent {

  expense:any=[];
  DelId:any;
  outcome:any=0;
  newmovie:any={
    "name": "",
    "amount": 0,
    "date": 0,
    "desc": ""
  }

  constructor(private http: HttpClient,  private router:Router, private transService: TranserviceService) {}
  ngOnInit() {
    this.http
      .get('https://648a952117f1536d65e94eb1.mockapi.io/expense')
      .subscribe((val: any) => {
        this.expense = val;
        console.log(val);
        this.getamt();
      });
  }

  getamt(){
    for (var val of this.expense){
      this.outcome += val.amount;
    }
  }


  DelMovie(ex: any) {
    this.DelId = ex.id;
    return this.http
      .delete(
        'https://648a952117f1536d65e94eb1.mockapi.io/expense' + '/' + this.DelId
      )
      .subscribe((val: any) => {
        this.getMovie();

        //  this.movies=val;
        //console.log(val);
      });
  }

  UpdateExpense(id:any){
    this.router.navigate(['updateexpense',id]);
  }


  getMovie(){

    this.http
      .get('https://648a952117f1536d65e94eb1.mockapi.io/expense')
      .subscribe((val: any) => {
        this.expense = val;
        console.log(val);
      });


  }

}
