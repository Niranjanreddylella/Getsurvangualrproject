import { Component, OnInit,Input } from '@angular/core';
import { user ,img} from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.css']
})
export class ClientprofileComponent implements OnInit {
  details: user
  list : any
  imag:img
  @Input() pck: any;
  constructor(private rt: Router,private use: UsersService) {
    this.details = new user();
    this.imag=new img()
   }

   img(event) {
    if (event.target.files && event.target.files[0]) {
      let rdr = new FileReader();
      rdr.readAsDataURL(event.target.files[0])
      rdr.onload = (ev: any) => {
        this.imag.image = ev.target.result
      
        this.imag.image = this.imag.image.replace("data:image/jpeg;base64,", "")
        this.imag.image = this.imag.image.replace("data:image/jpg;base64,", "")
        this.imag.image = this.imag.image.replace("data:image/png;base64,", "")
        this.imag.image = this.imag.image.replace("data:image/gif;base64,", "")
        this.imag.uid = localStorage.getItem('userId')
        alert(this.imag.image)
        this.use.UpdateImg(this.imag).subscribe((data) => {
          this.list = data
        })
        location.reload();
      }
    }
  }
  getProfile(email){
    this.rt.navigate(['cprofile'])
  }
  ngOnInit() {
    this.details.emailId = localStorage.getItem('emailId')
    this.use.GetByEmail(this.details.emailId).subscribe((data)=>{ this.list = data
        console.log(data)
      this.details.firstName =data[0].firstname
      this.details.lastName = data[0].lastname
      this.details.userId = data[0].userid
      this.details.image = data[0].img;
    })
  }

}
