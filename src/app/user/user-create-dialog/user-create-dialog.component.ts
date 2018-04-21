import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User, UserService } from '../../core/user.service';

@Component({
  selector: 'app-user-create-dialog',
  templateUrl: './user-create-dialog.component.html',
  styleUrls: ['./user-create-dialog.component.css']
})
export class UserCreateDialogComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public code: string;
  public type: string;

  constructor(
    private dialogRef: MatDialogRef<UserCreateDialogComponent>,
    private userService: UserService
  ) {     

  }

  ngOnInit() {
  }

  public cancel() {
    this.dialogRef.close();
  }

  public save() {
    this.userService.createUser(this.firstName, this.lastName, this.code, this.type).subscribe(x => {
      this.dialogRef.close();
    });
  }

}
