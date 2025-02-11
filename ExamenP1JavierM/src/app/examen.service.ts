import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenApi {

  constructor(private http: HttpClient) {}


  getExamen(): Observable<any> {
    return this.http.get('https://qapi.vercel.app/api/random');
  }


 


 
}


