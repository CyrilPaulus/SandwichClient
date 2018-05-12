import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandwichService } from './sandwich.service';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { TransactionService } from './transaction.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule 
  ], 
  providers: [
    UserService,
    TransactionService,
    SandwichService
  ]
})
export class CoreModule { }
