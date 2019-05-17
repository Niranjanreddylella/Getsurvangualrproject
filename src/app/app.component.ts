import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';
import { Router } from '../../node_modules/@angular/router';
import { Location } from '@angular/common';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'SurveyApp';
  collapedSideBar: boolean;
  userDetails: any[] = []

  us: Observable<string>;
  cl: Observable<string>;
  ad: Observable<string>;

  typeof: any
  @Input()
  skipLocationChange: boolean
  constructor(private rt: Router, private user: UsersService) {

  }

  ngOnInit() {
    let a = localStorage.getItem('emailId');

    this.user.GetByEmail(a).subscribe((data) => {
      this.userDetails = data[0]
      console.log(this.userDetails)
    })
    // }
    // else {
    //   this.userDetails = [{ 'firstname': 'admin' }]
    // }
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
  checkLocalstorage(): Observable<any> {
    return of(localStorage.getItem('typeOfUser'));
  }

  // checkLocalstorage1(): Observable <any> {
  //   return of(localStorage.getItem('typeOfUser'))
  // }

  checkLocalstorage2(): Observable<any> {
    return of(localStorage.getItem('username'));
  }

  ngDoCheck() {

    if (this.typeof === 'user') {
      this.checkLocalstorage().subscribe((data) => {
        this.us = data
      })
    }
    else if (this.typeof == 'client') {
      this.checkLocalstorage().subscribe((data) => {
        this.cl = data
      })
    }

    this.checkLocalstorage().subscribe((data) => {
      this.typeof = data;
    })
    this.checkLocalstorage2().subscribe((data) => {
      this.ad = data;
    })
  }
  btnlogout() {
    localStorage.clear();
    // this.rt.navigateByUrl('loginref',{skipLocationChange:true});
    // this.ngOnInit()
    // this.rt.navigateByUrl("/loginref",{ skipLocationChange : true}).then(()=>
    // this.rt.navigate(['login']))
    //  this.rt.navigate(['login'])
    //location.reload() 
  }

}
