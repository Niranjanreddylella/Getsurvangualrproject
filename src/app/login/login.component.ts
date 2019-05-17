import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { login } from '../models/user'
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reg: login;
  pra:any[]=[]
  constructor(private rt: Router, private lg: UsersService) {
    this.reg = new login();
  }
  btnForgot() {
    this.rt.navigate(['forgot'])
  }

  btnclick(userid, password, myfrm) {
    if (myfrm.valid) {
      var u = userid.value;
      var p = password.value;
      this.lg.userlogin(u, p).subscribe((data) => {
        this.reg = data;
        console.log(data)

        if (data.length > 0) {
          let x = data[0].emailid
          let y = data[0].typeofuser;
          alert(x + ' ' + y)
          alert('Login Success')
          localStorage.setItem('userId', u);
          localStorage.setItem('emailId', x);
          localStorage.setItem('typeOfUser', y);
          if (y == 'user') {
            this.rt.navigate(['uhome'])
          }
          else if (y == 'client') {
            this.rt.navigate(['chome'])
          }
          else if (y == 'admin') {
            this.rt.navigate(['ahome'])
          }
          location.reload()
        }
        else {
          alert('Invalid user')
        }
      })
    }
    else {
      alert('enter details....')
    }
  }

  fnsignup() {
    this.rt.navigate(['registration'])
  }

  fnforgetpass() {
    this.rt.navigate([''])
  }

  btnarry(event){
    let a=event
    alert(a)
  }
  
  ngOnInit() {
    this.pra.push({'name':'naga'})
  }

}
