import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranserviceService } from '../transervice.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {
  outcome:number=0;
  income:number=0;
  budget:any;
  expense:any;
  newBalance:number=0;

  constructor(private http: HttpClient,  private router:Router, private transService: TranserviceService) {}
  ngOnInit() {

    this.http
    .get('https://648df4702de8d0ea11e86e7d.mockapi.io/expense/user')
    .subscribe((val: any) => {
      this.budget = val;
      console.log(this.budget);
      this.getBudget();
      this.getExpense();
    });

  }

  getExpense(){
    this.http
      .get('https://648a952117f1536d65e94eb1.mockapi.io/expense')
      .subscribe((val: any) => {
        this.expense = val;
        console.log(this.expense);
        this.getamt();
      });

  }

  getBudget(){
    for (var val of this.budget){
      this.income = val.budget;
      console.log(this.income);
    }
  }
  getamt(){
    for (var val of this.expense){
      this.outcome += val.amount;
    }
    this.newBalance=this.income-this.outcome;
    console.log(this.newBalance);
  }
}
