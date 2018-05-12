import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SandwichService {

  constructor(private http: Http) { }

  public getSandwichs(): Observable<Sandwich[]> {
    return this.http.get(environment.apiUrl+ 'sandwich').map(x => 
      this.mapSandwichs(x.json()));
  }

  public getSandwich(id: string): Observable<Sandwich> {
    return this.http.get(environment.apiUrl+ 'sandwich/' + id).map(x => 
      this.mapSandwich(x.json()));
  }

  private mapSandwichs(json: any): Sandwich[] {
    return json.map(x => this.mapSandwich(x));
  }

  public mapSandwich(json: any): Sandwich {
    return new Sandwich(
        json.id,
        json.name,
        json.lastKnownPrice
    );
  }

}

export class Sandwich {
  public constructor( 
    public id: string,
    public name: string,
    public price: number
  ) {

  }
}