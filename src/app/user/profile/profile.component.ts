import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { user, names, country, state, survey, city } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: user
  list: any
  name: names
  surveydetails: survey
  surveycount: survey
  edit: Boolean = false
  save: Boolean = false
  co: country[] = []
  b: Boolean = false;
  countryid: any
  s: state[] = []
  c: city[] = []


  constructor(private rt: Router, private us: UsersService) {
    this.details = new user();
    this.name = new names();
    this.surveydetails = new survey();
    this.surveycount = new survey();
  }
  changepwd(email) {
    this.rt.navigate(['cpwd'])
  }
  // updateProfile(a){
  //   alert(a)
  //   this.rt.navigate(['updateProfile/'+a]) 
  // }
  editProfile() {
    this.edit = true
    this.save = true
  }
  updateProfile(myfrm) {
    this.edit = false
    this.save = false
    this.details.userId = localStorage.getItem('userId');
    let d = localStorage.getItem('typeOfUser')
    this.details.emailId = myfrm.value.emailId;
    this.details.mobileNo = myfrm.value.mobileNo;
    this.details.address = myfrm.value.address;
    this.details.zipCode = myfrm.value.zipCode;
    if (this.b == true) {
      this.details.country = myfrm.value.country;
      this.details.state = myfrm.value.state;
      this.details.city = myfrm.value.city;
    }
    else {
      this.details.country = this.details.country;
      this.details.state = this.details.state;
      this.details.city = this.details.city;
    }
    this.us.UpdateUserProfile(this.details).subscribe((data) => {
      localStorage.setItem('emailId', this.details.emailId);
    })
    this.us.getNames(this.details.country, this.details.state, this.details.city).subscribe((data) => {
      this.name = data
      this.name.country = data[0].country
      this.name.state = data[0].state
      this.name.city = data[0].city
      console.log(data)
    })
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
  ngOnInit() {
    this.details.emailId = localStorage.getItem('emailId')
    this.us.GetByEmail(this.details.emailId).subscribe((data) => {
      this.list = data
      console.log(data)
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
      this.us.Getrewardpoints(this.details.userId).subscribe((data) => {
        this.list = data
        console.log(data)
        if (data[0].rewards == null) {
          this.surveydetails.rewards = "0";
        }
        else {
          this.surveydetails.rewards = data[0].rewards;
        }
      })
      this.us.Getsurveycount(this.details.userId).subscribe((data) => {
        this.list = data
        console.log(data)
        this.surveycount.surveycou = data[0].surveid
        console.log(this.surveycount.surveycou)
      })
    })
    this.us.getcountrydetails().subscribe((data) => {
      console.log(data)
      this.co = data;
    })
  }
}
