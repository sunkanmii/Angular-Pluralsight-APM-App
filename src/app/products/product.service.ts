import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
  // Available throughout the components in the application.
  providedIn: 'root'
})

export class ProductService {
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){

    // In a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it out to the console.
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occured: ${err.error.message}`; 
    }else{
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);
  }

  //Subscribe takes three arguments

  //x.subscribe(nextFn, errorFn, completeFn)

}
//We add some exceptional handling because some things can go wrong