import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { user, firmDetails, clientUpdate } from '../models/user'
import { packages, subscribe, offerSub } from '../models/package';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url: string = "http://localhost:4500/cs"
  url1: string = "http://localhost:4500/as"
  url2: string = "http://localhost:4500/"

  constructor(private htc: HttpClient) {

  }

  register(us: firmDetails): Observable<any> {
    console.log(JSON.stringify(us));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url + '/user', JSON.stringify(us), httpOptions)
  }

  allPacks(): Observable<any> {
    return this.htc.get(this.url1 + '/package', { responseType: 'json' })
  }
  packSubscribe(us: offerSub): Observable<any> {
    console.log(JSON.stringify(us));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url2 + 'packagemapping', JSON.stringify(us), httpOptions)
  }
  offerById(a: any): Observable<any> {
    return this.htc.get(this.url1 + '/package/offer/' + a, { responseType: 'json' })
  }
  getClientDetails(i: any): Observable<any> {
    return this.htc.get(this.url + '/details/' + i, { responseType: 'json' })
  }
  GetClientFirmById(a: any): Observable<any> {
    return this.htc.get(this.url + '/cli/' + a, { responseType: 'json' })
  }
  GetFirmByFirmId(a: any): Observable<any> {
    return this.htc.get(this.url + '/cli/ss/' + a, { responseType: 'json' })
  }
  getAllCategory(): Observable<any> {
    return this.htc.get(this.url + '/cat' , { responseType: 'json' })
  }
  UpdateClientFirmDetails(firm: any): Observable<any> {
    console.log("Data in SERVICE : " + JSON.stringify(firm))
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.put(this.url + '/cli/', JSON.stringify(firm), httpOptions)
  }

  deleteQuestById(i: any): Observable<any> {
    return this.htc.delete(this.url + '/cli/' + i, { responseType: 'json' })
  }

  addFirm(us: firmDetails): Observable<any> {
    console.log(JSON.stringify(us));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url + '/cli' + '/addFirm', JSON.stringify(us), httpOptions)
  }
}
