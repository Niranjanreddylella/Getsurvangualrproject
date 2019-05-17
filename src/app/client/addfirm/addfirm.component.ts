import { Component, OnInit } from '@angular/core';
import { firmDetails, city, country, state } from 'src/app/models/user';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-addfirm',
  templateUrl: './addfirm.component.html',
  styleUrls: ['./addfirm.component.css']
})
export class AddfirmComponent implements OnInit {
  regis: firmDetails;
  c: city
  co: country
  s: state
  cat: any[] = []
  countryid: any
  constructor(private rt:Router, private ser:ClientService,private use:UsersService) {
    this.co = new country()
    this.s = new state()
    this.c = new city()
    this.regis = new firmDetails()
   }
   getStates(c) {
    this.countryid = c
    this.use.getstatedetails(c).subscribe((data) => {
      console.log(data)
      this.s = data;
    })
  }
  getCity(c) {
    this.use.getcitydetials(this.countryid, c).subscribe((data) => {
      console.log(data)
      this.c = data
    })
  }
  btnAddFirm(frm1) {
    if (frm1.valid) {
      this.regis.clientId = localStorage.getItem('userId')
      this.regis.firmName = frm1.value.firmName
      this.regis.establishedYear = frm1.value.establishedYear
      this.regis.description = frm1.value.description
      this.regis.parentFirm = frm1.value.parentFirm
      this.regis.category = frm1.value.category
      this.regis.fcountry = frm1.value.fcountry
      this.regis.fstate = frm1.value.fstate
      this.regis.fcity = frm1.value.fcity
      this.regis.faddress = frm1.value.faddress
      this.regis.fzipCode = frm1.value.fzipCode
      this.regis.typeOfUser = "client"
      alert(JSON.stringify(this.regis))
      this.ser.addFirm(this.regis).subscribe((data) => {
        console.log(data)
        this.rt.navigate(['cprofile'])
      })

    }
    else {
      alert('please enter details')
    }
  }
  ngOnInit() {
    this.use.getcountrydetails().subscribe((data) => {
      console.log(data)
      this.co = data
    })
    this.ser.getAllCategory().subscribe((data) => {
      console.log(data)
      this.cat = data
    })
  }

}
