import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ClientService } from '../services/client.service';
import { user, country, state, city, firmDetails } from '../models/user'
import { UsersService } from '../services/users.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public edited = false;
  c: city[] = []
  co: country[] = []
  s: state[] = []
  countryid: any
  frmvalid: Boolean = false
  regis: firmDetails
  type: string
  on: any = 'false'
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  animalControl = new FormControl('', [Validators.required]);
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];

  constructor(private rt: Router, private ser: ClientService,
    private use: UsersService, private _formBuilder: FormBuilder) {
    this.regis = new firmDetails()
  }

  btnuser(frm) {
    if (frm.valid) {
      this.regis.firstName = frm.value.firstName
      this.regis.lastName = frm.value.lastName
      this.regis.emailId = frm.value.emailId
      this.regis.password = frm.value.password
      this.regis.gender = frm.value.gender
      this.regis.address = frm.value.address
      this.regis.country = frm.value.country
      this.regis.state = frm.value.state
      this.regis.city = frm.value.city
      this.regis.zipCode = frm.value.zipCode
      this.regis.typeOfUser = "user"
      alert(JSON.stringify(this.regis))

      this.ser.register(this.regis).subscribe((data) => {
        console.log(data)
        this.rt.navigate(['login'])
      })
    }
    else {
      alert('please enter details')
    }
  }
  // btnuser1(n) {
  //   this.on = 'true'
  // }
  btnclient(frm1) {
    if (frm1.valid) {
      this.regis.firmName = frm1.value.firmName
      this.regis.establishedYear = frm1.value.establishedYear
      this.regis.description = frm1.value.description
      this.regis.parentFirm = frm1.value.parentFirm
      this.regis.fcountry = frm1.value.fcountry
      this.regis.fstate = frm1.value.fstate
      this.regis.fcity = frm1.value.fcity
      this.regis.faddress = frm1.value.faddress
      this.regis.fzipCode = frm1.value.fzipCode
      this.regis.typeOfUser = "client"
      alert(JSON.stringify(this.regis))
      this.ser.register(this.regis).subscribe((data) => {
        console.log(data)
        this.rt.navigate(['login'])
      })
    }
    else {
      alert('please enter details')
    }
  }

  getStates(c) {
    this.countryid = c
    this.use.getstatedetails(c).subscribe((data) => {
      console.log(data)
      this.s = data;
    })
  }

  getCity(c) {
    // alert(c)
    // alert(this.countryid)
    this.use.getcitydetials(this.countryid, c).subscribe((data) => {
      console.log(data)
      this.c = data
    })
  }
  ngOnInit() {
    this.use.getcountrydetails().subscribe((data) => {
      console.log("countries" + data)
      this.co = data
    })
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
