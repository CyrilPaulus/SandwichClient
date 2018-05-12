import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog/confirmation-dialog.component';
import { AppMaterialModule } from '../app-material.module';
import { DialogService } from './dialog/dialog.service';
import { UserTypePipe } from './pipes/user-type.pipe';
import { CustomValidatorDirective } from './directives/custom-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  declarations: [
    ConfirmationDialogComponent,
    UserTypePipe,
    CustomValidatorDirective],
  exports: [
    UserTypePipe,
    CustomValidatorDirective
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  providers: [
    DialogService
  ]
})
export class SharedModule { }
