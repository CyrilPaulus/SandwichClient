import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatToolbarModule, 
  MatIconModule, 
  MatMenuModule, 
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule
  ]
})
export class AppMaterialModule { }