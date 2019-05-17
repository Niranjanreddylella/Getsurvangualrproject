import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user, firmDetails } from '../models/user';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisService {
  url: string = "http://localhost:4500/us/user/"
  url1: string = "http://localhost:4500/cs/cli/"
  url2: string = "http://localhost:4500/cs/user/"
  constructor(private hc: HttpClient) {
  }
  register(us: user): Observable<any> {
    console.log(JSON.stringify(us));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.hc.post(this.url, JSON.stringify(us), httpOptions)
  }
  clientregister(us: user): Observable<any> {
    console.log(JSON.stringify(us));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.hc.post(this.url2, JSON.stringify(us), httpOptions)
  }

  addFirmDetails(fm: firmDetails): Observable<any> {
    console.log(JSON.stringify(fm));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.hc.post(this.url1, JSON.stringify(fm), httpOptions)
  }
}
