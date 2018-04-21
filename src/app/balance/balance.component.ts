import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  single: any[];
  multi: any[];

  data: any[];

  view: any[] = [1024, 400];

  constructor(private userService: UserService) {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(x =>{
      this.data = x.sort((a, b) => (a > b ? 1 : -1)).map(user => { return {
        name: user.code + ' ' + user.balance +'€',
        value: user.balance}
      });
    });
  }

  public format(input: any): string {
    return input + ' €';
  }

}
