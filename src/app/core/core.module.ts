import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandwichService } from './sandwich.service';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule 
  ], 
  providers: [
    UserService
  ]
})
export class CoreModule { }
