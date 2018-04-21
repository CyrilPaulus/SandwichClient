import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService, User } from '../core/user.service';
import { MatDialog } from '@angular/material';
import { UserEditDialogComponent } from './user-edit-dialog/user-edit-dialog.component';
import { UserCreateDialogComponent } from './user-create-dialog/user-create-dialog.component';

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
    private dialog: MatDialog
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
    this.userService.deleteUser(user).subscribe(x => {
      this.ngOnInit()
    });
  }
}

