import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { environment } from "../../environments/environment";

@Injectable()
export class TransactionService {

    constructor(
        private http: Http
        
      ) { }
    
      public getTransactions(): Observable<Transaction[]> {
        return this.http.get(environment.apiUrl+ 'transaction').map(x => 
          this.mapTransactions(x.json()));
      }
    
      public getTransaction(id: string): Observable<Transaction> {
        return this.http.get(environment.apiUrl+ 'transaction/' + id).map(x => 
          this.mapTransaction(x.json()));
      }

      private mapTransactions(json: any): Transaction[] {
        return json.map(x => this.mapTransaction(x));
      }

      public mapTransaction(json: any): Transaction {
        return new Transaction(
            json.id,
            json.parentId,
            json.userCode,
            json.type,
            json.amount,
            new Date(json.date),
            json.comment,
            json.sandwich
        );
      }
}

export class Transaction {
    public constructor(
        public id: number,
        public parentId: number,
        public userCode: string,
        public type: string,
        public amount: number,
        public date: Date,
        public comment: null,
        public sandwich: null
    ) {

    }
}