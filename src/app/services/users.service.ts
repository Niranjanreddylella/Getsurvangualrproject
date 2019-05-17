import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { user , login ,feedback, Answers,img} from '../models/user'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string="http://localhost:4500/us/"
  url1="http://localhost:4500/countries/"
  url2 = "http://localhost:4500/"
 
  constructor( private htc: HttpClient) { 

  }

  register(us: user): Observable<any> {
    console.log(JSON.stringify(us));
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }
    return this.htc.post(this.url +'user', JSON.stringify(us), httpOptions)
  }

  userlogin(u: any, p: any): Observable<any>  {
    return this.htc.get(this.url +'user/' +'login'+'/' + u+'/'+p, { responseType: 'json' })
 }

imgpost(i:any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }
return this.htc.post(this.url +'s/ss/',JSON.stringify(i),httpOptions)
}
 UpdatePassword(ch: login): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }
  return this.htc.put(this.url +'user/'+ ch.emailId, JSON.stringify(ch), httpOptions)
}

GetByEmail(i : any) : Observable <any> {
  return this.htc.get(this.url + 'user/' +i, {responseType: 'json'})
}

insertfeedback(fed: feedback): Observable<any> {
  console.log(JSON.stringify(fed));
  const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }
  return this.htc.post(this.url + 'insertFeedback', JSON.stringify(fed), httpOptions)
}

getcountrydetails():Observable<any>{
  return this.htc.get(this.url1,{responseType:'json'})
}

 getstatedetails(s:any):Observable<any>{
   return this.htc.get(this.url1+s,{responseType:'json'})
 }


getcitydetials(c:any,s:any):Observable<any>{
  return this.htc.get(this.url1+c+'/'+s,{responseType:'json'})
}

Getrewardpoints(i : any) : Observable <any> {
  return this.htc.get(this.url + 'r/w/e/rewards/' +i, {responseType: 'json'})
}

Getsurveycount(i:any):Observable<any>{
  return this.htc.get(this.url+'r/w/e/survey/count/' +i, {responseType: 'json'})
}

UpdateImg(a:img): Observable<any> {
  console.log(JSON.stringify(a))
  const httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }
  return this.htc.put(this.url +'user/u/update/', JSON.stringify(a), httpOptions)
}

Getupcmgsurvey():Observable<any>{
  return this.htc.get(this.url+'usurvey', {responseType: 'json'})
}

getcompletedsurvey():Observable<any>{
  return this.htc.get(this.url + 'completed',{responseType:'json'})
}

ongoingsurveys():Observable <any>{
  return this.htc.get(this.url+ 'ongoing' ,{responseType:'json'})
}

trendingSurveys(): Observable <any> {
  return this.htc.get(this.url +'trend',{responseType:'json'})
}

getNames(cid:any,sid:any,ciid:any) : Observable <any>{
  return this.htc.get(this.url+'names/' +cid+'/'+sid+'/'+ciid,{responseType:'json'})
}

forgetpassword(e:any,u:any):Observable<any>{
  return this.htc.get(this.url +'user/' +'forgot/' + e +'/' +u,{responseType:'json'})
}

UpdateUserProfile(upro:user):Observable<any>{
  console.log(JSON.stringify(upro))
  const httpOptions={
    headers:new HttpHeaders({'content-type':'application/json'})
  }
  return this.htc.put(this.url+'user/update/'+upro.userId,JSON.stringify(upro),httpOptions)
}

submitAnswer(ans : Answers) : Observable <any>{
  console.log(JSON.stringify(ans))
  const httpOptions={
    headers:new HttpHeaders({'content-type':'application/json'})
  }

  return this.htc.post(this.url2 + 'answer',JSON.stringify(ans),httpOptions)
}

}
