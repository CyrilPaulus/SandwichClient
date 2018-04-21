import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User, UserService } from '../../core/user.service';

@Component({
  selector: 'app-user-edit-dialog',
  templateUrl: './user-edit-dialog.component.html',
  styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent implements OnInit {

  public user: User;

  public firstName: string;
  public lastName: string;
  public code: string;

  constructor(
    private dialogRef: MatDialogRef<UserEditDialogComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { 
    this.user = data;

    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.code = data.code;
  }

  ngOnInit() {
  }

  public cancel() {
    this.dialogRef.close();
  }

  public save() {
    this.userService.updateUser(this.user, this.firstName, this.lastName, this.code).subscribe(x => {
      this.user.code = x.code;
      this.user.firstName = x.firstName;
      this.user.lastName = x.lastName;
      this.dialogRef.close();
    });
  }

}
