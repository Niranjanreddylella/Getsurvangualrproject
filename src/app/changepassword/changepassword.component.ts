import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { login } from '../models/user'

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  ch: login
  lgs;
  constructor(private lg:UsersService,private rt:Router) { 
    this.ch = new login();
  }

  update(id,myfrm:any) {
    if (myfrm.valid) {
      let a = localStorage.getItem("userId");
      let b = localStorage.getItem("typeOfUser");
      let d=localStorage.getItem("emailId")
      this.ch.emailId=d;
      this.ch.userId = a;
      this.ch.password=id.value;
      this.ch.newPassword=myfrm.value.password ;

      this.lg.UpdatePassword(this.ch).subscribe((data)=>{
        if(data.length>0){
          this.lgs=true;
          
          if(b == 'user'){
                 this.rt.navigate(['uhome'])
                    }
                    else if(b == 'client'){
                      
                      this.rt.navigate(['chome'])
                    }
                    
        }
        else{
          alert("Current Password Not Matched.....")
        } 
      })      
    }
      else {
        alert("please provide password")
      }
    
  }
  // update(id,myfrm:any) {
  //   if (myfrm.valid) {
  //     let a = localStorage.getItem("userid");
  //     let b = localStorage.getItem("typeofuser");
  //     let d=localStorage.getItem("emailid")
  //     this.ch.emailid=d;
  //     this.ch.userid = a;
  //     this.ch.password=myfrm.value.password;
  //          let c=id.value;
  //     this.lg.SubmitClick1(c, a).subscribe((data) => {
  //       console.log(data)
  //       if (data.length > 0) {
  //         alert('valid')
  //         this.lgs = true;
  //         this.lg.UpdatePassword(this.ch).subscribe((data) => {
  //           alert("Updated successfully.....")
  //           if(b == 'user'){
  //             this.rt.navigate(['uhome'])
  //           }
  //           else if(b == 'client'){
  //             this.rt.navigate(['chome'])
  //           }
  //         }
  //         )
  //       }
  //       else {
  //         alert('Current Password Not Matched.....')
  //       }
  //     })

      
  //   }
  //     else {
  //       alert("please provide password")
  //     }
    
  // }
  // update(id,myfrm:any) {
  //   if (myfrm.valid) {
  //     let a = localStorage.getItem("userid");
  //     let b = localStorage.getItem("typeofuser");
  //     let d=localStorage.getItem("emailid")
  //     this.ch.emailid=d;
  //     this.ch.userid = a;
  //     this.ch.password=myfrm.value.cpwd
  //    let c=id.value;
  //     this.lg.SubmitClick1(c, a).subscribe((data) => {
  //       console.log(data)
  //       if (data.length > 0) {
  //         alert('valid')
  //         //alert(this.ch.emailid)
  //         this.lgs = true;
  //         this.lg.UpdatePassword(this.ch).subscribe((data) => {
  //           alert("Updated successfully.....")
  //           if(b == 'user'){
  //             this.rt.navigate(['uhome'])
  //           }
  //           else if(b == 'client'){
  //             this.rt.navigate(['chome'])
  //           }
  //         }
  //         )
  //       }
  //       else {
  //         alert('Current Password Not Matched.....')
  //       }
  //     })

      
  //   }
  //     else {
  //       alert("please provide password")
  //     }
    
  // }

  ngOnInit() {
  }

}
