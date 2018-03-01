import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserService, User } from '../core/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: User[] = [];
  public editedUser: User = null;
  public createUser: User = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(x => {
      this.users = x;
    });
  }

  public edit(user: User) {
    this.editedUser = user;
  }

  public cancel() {
    this.editedUser = null;
  }

  public save() {
    this.userService.updateUser(this.editedUser).subscribe(x =>{
      this.ngOnInit();
    });
  }

  public create() {
    this.userService.createUser(this.createUser).subscribe(x =>{
      this.ngOnInit();
      this.createUser = null;
    });
  }

  public showCreate() {
    this.createUser = new User(0, null, null, null, 'internal');
  }

  public cancelCreate() {
    this.createUser = null;
  }

  public delete(user: User) {
    this.userService.deleteUser(user).subscribe(x => {
      this.ngOnInit()
    });
  }


}

