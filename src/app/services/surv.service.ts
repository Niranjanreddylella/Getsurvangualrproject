import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { sur ,surv , image} from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurvService {
  url: string = "http://localhost:4500/survey/"
  url1="http://localhost:4500/cs/category/"
  constructor(private htc: HttpClient) {

   }

   addSurvey(sr: sur): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url, JSON.stringify(sr), httpOptions)
  }
  getSurvey(a: any): Observable<any> {
    return this.htc.get(this.url + a, { responseType: 'json' })
  }
  getSurveyByClientId(a): Observable<any> {
    return this.htc.get(this.url+'client/'+a, { responseType: 'json' })
  }
  getbyname(a):Observable<any>{
    return this.htc.get(this.url1+a,{responseType:'json'})
    }
    updateSurveyImage(a: image): Observable<any> {
      console.log(JSON.stringify(a))
      const httpOptions = {
        headers: new HttpHeaders({ 'content-type': 'application/json' })
      }
      return this.htc.put(this.url + 'update/ss', JSON.stringify(a), httpOptions)
    }
}
