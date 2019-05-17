import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { ClientService } from 'src/app/services/client.service';
import { firmDetails, names, country, state, survey, city, clientUpdate } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: firmDetails
  firm: clientUpdate
  list: any
  name: names
  client: any[] = [];
  details1: any
  edit: Boolean = false;
  save: Boolean = false;
  fedit: Boolean = false;
  fsave: Boolean = false;
  b: Boolean = false;
  countryid: any[]
  co: country[] = []
  s: state[] = []
  c: city[] = []
  coun: any;
  stat: any;
  citi: any;
  ss: any
  constructor(private rt: Router, private us: UsersService, private cl: ClientService) {
    this.details = new firmDetails();
    this.name = new names();
    this.firm = new clientUpdate()
    // this.details1 = new this.details1();
  }
  changepwd(email) {
    this.rt.navigate(['cpwd'])
  }
  addFirmDetails(f) {
    alert(f)
    this.rt.navigate(['addfirm'])
  }
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
    alert(c)
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
  editFirmDetails() {
    this.fedit = true
    this.fsave = true
  }
  updateFirm(myfrm) {
    this.fedit = false
    this.fsave = false
    this.details1.firmname = myfrm.value.firmname;
    this.details1.description = myfrm.value.description;
    this.details1.parentfirm = myfrm.value.parentfirm;
    this.details1.address = myfrm.value.address;
    this.details1.zipcode = myfrm.value.zipcode;
    if (this.b == true) {
      this.details1.country = myfrm.value.country;
      this.details1.state = myfrm.value.state;
      this.details1.city = myfrm.value.city;
     
    }
    else {
      this.details1.country = this.coun;
      this.details1.state = this.stat;
      this.details1.city = this.citi;
     
    }
    console.log("Updated Dtata : " + JSON.stringify(this.details1));
    this.cl.UpdateClientFirmDetails(this.details1).subscribe((data) => {
      console.log(data)
    })

  }
  ngOnInit() {
    this.details.emailId = localStorage.getItem('emailId')
    this.details.clientId = localStorage.getItem('userId');
    this.cl.getClientDetails(this.details.emailId).subscribe((data) => {
      this.list = data
      console.log("dataa" + '' + data)
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
      this.cl.GetClientFirmById(this.details.clientId).subscribe((data1) => {
        console.log(data1)
        this.details1 = data1;
        this.details1.userid = localStorage.getItem('userId');
        for (let i = 0; i < this.details1.length; i++) {
          let c = this.details1[i].country;
          let s = this.details1[i].state;
          let cty = this.details1[i].city;
          this.coun = c
          this.stat = s
          this.citi = cty
          this.us.getNames(c, s, cty).subscribe((data) => {
            console.log('hi' + JSON.stringify(data))
            this.details1[i].country = data[0].country
            this.details1[i].state = data[0].state
            this.details1[i].city = data[0].city
          })
        }
      })
      this.us.getcountrydetails().subscribe((data) => {
        console.log(data)
        this.co = data;
      })
    })
  }

}
