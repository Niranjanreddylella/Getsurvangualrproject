import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { names, user, state,city,country } from 'src/app/models/user';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
details : user
name: names
c:city
co:country
s:state
countryid:any
coun:any;
stat:any;
citi:any;
b: Boolean = false;
  constructor(private rt:Router,private us:UsersService) { 
    this.details = new user();
    this.name = new names();
    this.co=new country()
    this.s=new state()
    this.c=new city()
  }

  getStates(c) {
    this.b = true;
    this.countryid = c
    this.us.getstatedetails(c).subscribe((data) => {
      console.log(data)
      this.s = data;
    })
  }

  getCity(c) {
    this.b = true;
    this.us.getcitydetials(this.countryid, c).subscribe((data) => {
      console.log(data)
      this.c = data
    })
  }

  btnUpdate(myfrm) {


   this.details.userId = localStorage.getItem('userId');
   let d = localStorage.getItem('typeOfUser')
    if (this.b == true) {
      this.details.emailId = myfrm.value.emailId;
      this.details.mobileNo = myfrm.value.mobileNo;
      this.details.country = myfrm.value.country;
      this.details.state = myfrm.value.state;
      this.details.city = myfrm.value.city;
      this.details.address = myfrm.value.address;
      this.details.zipCode = myfrm.value.zipCode;

      this.us.UpdateUserProfile(this.details).subscribe((data) => {
        localStorage.setItem('emailId', this.details.emailId);
        if(d == 'user') {
          this.rt.navigate(['myprofile'])
        }
        else if(d == 'client'){
          this.rt.navigate(['cprofile'])
        }
      })
    }
    else {
      this.details.emailId = myfrm.value.emailId;
      this.details.mobileNo = myfrm.value.mobileNo;
      this.details.address = myfrm.value.address;
      this.details.zipCode = myfrm.value.zipCode;
      this.details.country=this.coun;
      this.details.state=this.stat;
      this.details.city=this.citi;
      this.us.UpdateUserProfile(this.details).subscribe((data) => {
        localStorage.setItem('emailId', this.details.emailId);
        if(d == 'user') {
          this.rt.navigate(['myprofile'])
        }
        else if(d == 'client'){
          this.rt.navigate(['cprofile'])
        }
      })
    }
  }

  ngOnInit() {
    this.us.getcountrydetails().subscribe((data) => {
      console.log(data)
      this.co = data;
    })
    this.details.emailId = localStorage.getItem('emailId')
    this.us.GetByEmail(this.details.emailId).subscribe((data) => {
      console.log(data)
      // this.countries=data;
      this.coun = data[0].country
      this.stat = data[0].state
      this.citi = data[0].city
      this.details.firstName = data[0].firstname
      this.details.lastName = data[0].lastname
      this.details.emailId = data[0].emailid
      this.details.userId = data[0].userid
      this.details.mobileNo = data[0].mobileno
      this.details.gender = data[0].gender
      this.details.country = data[0].country
      this.details.state = data[0].state
      this.details.city = data[0].city
      this.details.address = data[0].address
      this.details.zipCode = data[0].zipcode
      this.details.typeOfUser = data[0].typeofuser
      this.details.image = data[0].image;
      this.us.getNames(this.details.country, this.details.state, this.details.city).subscribe((data) => {
        this.name = data
        this.name.country = data[0].country
        this.name.state = data[0].state
        this.name.city = data[0].city
        console.log(data)
      })
    })
  }

}
