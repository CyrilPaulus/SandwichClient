import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

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

  public updateUser(user: User): Observable<User>{
    return this.http.put(environment.apiUrl+ 'user/' + user.id, user)
    .map(x => this.mapUser(x.json()));
  }

  public createUser(user: User): Observable<User>{
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
      json.type
    );
  }

}

export class User {
  public constructor(
    public id: number,
    public code: string,
    public firstName: string,
    public lastName: string,
    public type: string
  ) {

  }
}