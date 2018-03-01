import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandwichService } from './sandwich.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [
    SandwichService
  ]
})
export class CoreModule { }
