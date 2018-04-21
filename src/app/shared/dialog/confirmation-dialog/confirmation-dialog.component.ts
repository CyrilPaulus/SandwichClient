import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  public options: ConfirmationDialogOptions;

  constructor(
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,    
    @Inject(MAT_DIALOG_DATA) data: ConfirmationDialogOptions
  ) { 
    this.options = data;    
  }

  ngOnInit() {
  }

  public cancel() {
    this.dialogRef.close(false);
  }

  public confirm() {
    this.dialogRef.close(true);
  }

}

export class ConfirmationDialogOptions {

  public constructor(
    public message: string,
    public confirmTitle: string,    
    public cancelTitle: string,
    public title: string
  ) {

  }
}
