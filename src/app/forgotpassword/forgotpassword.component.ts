import { Component, OnInit } from '@angular/core';
import { login, user } from '../models/user';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  details:login
  ch:user
  constructor(private us:UsersService,private rt:Router) {
    this.ch=new user()
   }
   btnsubmit(emailid,userid,myFrm) {
    if(myFrm.valid){
      let e=emailid.value
    let u=userid.value;
  //  alert(e+u)
    this.us.forgetpassword(e, u).subscribe((data) => {
      if (data.length > 0) {
        this.rt.navigate(['login'])
      }
      else{
        alert("enter valid details")
      }
    })
    }
    else{
      alert("enter details")
    }
    
  }

  ngOnInit() {
  }

}
