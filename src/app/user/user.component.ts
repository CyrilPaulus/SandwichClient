import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService, User } from '../core/user.service';
import { MatDialog } from '@angular/material';
import { UserEditDialogComponent } from './user-edit-dialog/user-edit-dialog.component';
import { UserCreateDialogComponent } from './user-create-dialog/user-create-dialog.component';
import { DialogService } from '../shared/dialog/dialog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[] = [];   
  public columnsToDisplay = ['userName', 'userCode', 'balance'];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(x => {
      this.users = x;
    });
  }

  public edit(user: User) {
    this.dialog.open(UserEditDialogComponent, {
      height: '400px',
      width: '600px',
      data: user
    });
  }

  public create() {
    let dialog = this.dialog.open(UserCreateDialogComponent, {
      height: '400px',
      width: '600px'      
    });
    dialog.afterClosed().subscribe(x =>{
      this.ngOnInit();
    });    
  } 

  public delete(user: User) {    
    let message = `Are you sure you want to delete the user <em>${user.firstName} ${user.lastName} (${user.code})</em> ?`;
    this.dialogService.showConfirmation(message).subscribe(x =>{ 
      if(!x)
        return;

        this.userService.deleteUser(user).subscribe(x => {
          this.ngOnInit()
        });
    });
    
  }
}

