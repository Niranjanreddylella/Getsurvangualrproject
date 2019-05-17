import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { alogin } from'../models/admin'
import { Observable } from 'rxjs';
import {packages,offers ,offer} from '../models/package'

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url : string  =  "http://localhost:4500/as/"
  constructor( private htc: HttpClient) {

   }

   CheckLogin(u: string, p : string) : Observable<any>{
    return this.htc.get(this.url+'adm' +'/'+u+'/'+p,{responseType:'json'})
  }

  addPackage(pack: packages): Observable<any> {
    console.log(JSON.stringify(pack));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url+'package', JSON.stringify(pack), httpOptions)
  }

  allPacks(): Observable<any> {
    return this.htc.get(this.url + '/package', { responseType: 'json' })
  }

  pckgById(pckid: number): Observable<any> {
    return this.htc.get(this.url + '/package/' + pckid, { responseType: 'json' });
}

  Deletepck(pckId: number): Observable<any> {
    return this.htc.delete(this.url + '/package/' + pckId, { responseType: 'json' })
  }

  Updatepckg(upkgObj: packages): Observable<any>{
    const httpOptions = {
        headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.put(this.url+'/package/'+upkgObj.pckId,  JSON.stringify(upkgObj), httpOptions)
  }

  addOffers(off: offers): Observable<any> {
    console.log(JSON.stringify(off));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url+'offer', JSON.stringify(off), httpOptions)
  }
  allOffers(): Observable<any> {
    return this.htc.get(this.url + 'offer', { responseType: 'json' })
  }
  updOffers(off: offer): Observable<any> {
    console.log(JSON.stringify(off));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.put(this.url + 'offer', JSON.stringify(off), httpOptions)
  }
}
