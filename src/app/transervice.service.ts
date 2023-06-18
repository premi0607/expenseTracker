import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranserviceService {

  constructor(private http: HttpClient) { }

  updatateExpense(id:any, newExpense:any){
    return this.http.put('https://648a952117f1536d65e94eb1.mockapi.io/expense'+'/'+id, newExpense)
  }

  createExpense(newexpense:any){
    return this.http.post('https://648a952117f1536d65e94eb1.mockapi.io/expense', newexpense) .subscribe((val: any) => {
    });
  }
}
