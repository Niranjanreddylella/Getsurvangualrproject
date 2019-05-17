import { Component, OnInit } from '@angular/core';
import { alogin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
login : alogin
  constructor(private as:AdminService,private rt:Router) { 
    this.login = new alogin()
  }

  ngOnInit() {
  }

  loginform(username,password,ngx){
    if(ngx.valid){
      let u = username.value;
      let p = password.value;
      alert ( u + '  ' +p)
     this.as.CheckLogin(u,p).subscribe((data) => {
         if (data.length > 0) {
             localStorage.setItem("username",u)
             this.rt.navigate(['ahome'])
             alert('Hi Admin')
         }
         else {
             alert('Invalid Admin Credentials..')
         }
     })
    }
    else{
      alert('Enter details')
    }
  
}

}
