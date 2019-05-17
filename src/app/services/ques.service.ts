import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { questions, opts } from '../models/ques'

@Injectable({
  providedIn: 'root'
})
export class QuesService {
  url: string = "http://localhost:4500/os/"
  url1: string = "http://localhost:4500/"
  constructor(private htc: HttpClient) {
  }

  addQuestions(qs: questions): Observable<any> {
    console.log(JSON.stringify(qs));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url + 'questions', JSON.stringify(qs), httpOptions)
  }
  getQuestionModel(): Observable<any> {
    return this.htc.get(this.url1 + 'questionmodel', { responseType: 'json' })
  }
  getQuestionCount(a: any): Observable<any> {
    return this.htc.get(this.url + 'count/' + a, { responseType: 'json' })
  }
  getQuesOpt(sid: any): Observable<any> {
    return this.htc.get(this.url + 'queOptions/' + sid, { responseType: 'json' })
  }
  getPreDefined(): Observable<any> {
    return this.htc.get(this.url + 'preDefined', { responseType: 'json' })
  }
}
