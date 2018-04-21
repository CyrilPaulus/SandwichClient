import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import { last } from '@angular/router/src/utils/collection';

@Injectable()
export class UserService {


  constructor(
    private http: Http
    
  ) { }

  public getUsers(): Observable<User[]> {
    return this.http.get(environment.apiUrl+ 'user').map(x => 
      this.mapUsers(x.json()));
  }

  public getUser(id: string): Observable<User> {
    return this.http.get(environment.apiUrl+ 'user/' + id).map(x => 
      this.mapUser(x.json()));
  }

  public updateUser(user: User, firstName: string, lastName: string, code: string, type:string): Observable<User>{
    let newUser = new User(user.id, code, firstName, lastName, type, null);
    return this.http.put(environment.apiUrl+ 'user/' + user.id, newUser)
    .map(x => this.mapUser(x.json()));
  }
  
  public createUser(firstName: string, lastName: string, code: string, type: string): Observable<User>{
    let user = new User(0, code, firstName, lastName, type, null);
    return this.http.post(environment.apiUrl+ 'user', user)
    .map(x => this.mapUser(x.json()));
  }

  public deleteUser(user: User): Observable<void> {
    return this.http.delete(environment.apiUrl+ 'user/' + user.id)
    .map(x => {});
  }

  private mapUsers(json: any): User[] {
    return json.map(x => this.mapUser(x));
  }

  private mapUser(json: any): User {
    return new User(
      json.id,
      json.code,
      json.firstName,
      json.lastName,
      json.type,
      json.balance
    );
  }

}

export class User {
  public constructor(
    public id: number,
    public code: string,
    public firstName: string,
    public lastName: string,
    public type: string,
    public balance: number
  ) {

  }
}