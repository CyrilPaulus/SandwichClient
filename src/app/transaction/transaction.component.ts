import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaction } from '../core/transaction.service';
import { TransactionCreateDialogComponent } from './transaction-create-dialog/transaction-create-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  public transactions: Transaction[];
  public columnsToDisplay = ['date', 'user', 'type', 'amount', 'sandwich'];

  constructor(
    private transactionService: TransactionService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(x =>{
      this.transactions = x;   

    });
    
  }

  public isError(transaction: Transaction): boolean {
    
    if(transaction.parentId !== null)
      return false;    

    let total = 0;
    for (let tr of this.transactions.filter(x => x.parentId === transaction.id)) {
      total = total + tr.amount;
    }

    if(total === 0)
      return false;
  
    return total + transaction.amount !== 0;
    
  }

  public create() {
    let dialog = this.dialog.open(TransactionCreateDialogComponent, {      
      width: '600px'      
    });
  }

}
