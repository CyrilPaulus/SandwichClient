import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService, User } from '../../core/user.service';
import { SandwichService, Sandwich } from '../../core/sandwich.service';
import { FormControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-transaction-create-dialog',
  templateUrl: './transaction-create-dialog.component.html',
  styleUrls: ['./transaction-create-dialog.component.css']
})
export class TransactionCreateDialogComponent implements OnInit {

  public type: string = 'order';
  public date: Date = new Date();
  public userCode: string;
  public amount: number;

  public orders: Order[] = [];

  public sandwiches: Sandwich[] = [];
  public users: User[] = [];

  @ViewChild('amountCtrl')
  public amountCtrl: NgModel

  constructor(
    private dialogRef: MatDialogRef<TransactionCreateDialogComponent>,
    private userService: UserService,
    private sandwichService: SandwichService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(x => {
      this.users = x;
    });

    this.sandwichService.getSandwichs().subscribe(x => {
      this.sandwiches = x;
    })
  }

  public cancel() {
    this.dialogRef.close();
  }

  public save() {

  }

  public addOrder() {
    this.orders.push(new Order(null, null, null));
  }

  public sandwichChanged(newSandwich: string, order: Order) {    
    let sandwich = this.sandwiches.find(x => x.name === newSandwich);
    if (!sandwich)
      return;

    order.amount = sandwich.price;
  }

  public removeOrder(order: Order) {
    var index = this.orders.indexOf(order);
    this.orders.splice(index, 1);
  }

  public getInnerAmountError(amountCtrl: NgModel) {
    if(amountCtrl.value >= 0)
      return "Value should be negative";
    return null;
  }

  

  public validateTotal() {        
    return () => {      
      let validated = true;

      if (this.type === 'credit')
        validated = this.amount > 0;
      else if (this.type === 'debit')
        validated = this.amount < 0;
      else if (this.type === 'order') {

      let total = 0;
      for (let order of this.orders)
        total += order.amount;
        validated = this.amount + total === 0;
      }
  
      return validated ? null : {
        'amount': 'error'
      };
    }
  }

  public validateInner(innerCtrl: NgModel) {
    return () => {
      let value = innerCtrl.value;
      return value < 0 ? null : {
        'amount': 'error'
      };
    }
  }

  public getAmountError(): any { 
    
    if (this.type === 'credit')
      return 'Amount should be positive';

    if (this.type === 'debit')
      return 'Amount should be negative';

    let total = 0;
    for (let order of this.orders)
      total += order.amount
    return 'Amount should be equal to ' + -total;

  }

  public refreshValidation() {    
    this.amountCtrl.control.setValue(this.amount);
  }


}

export class Order {
  public constructor(
    public userCode: string,
    public sandwich: string,
    public amount: number
  ) {

  }
}