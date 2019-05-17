import { Component, OnInit } from '@angular/core';
import { user, names, country, state, city, clientUpdate } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clientupdate',
  templateUrl: './clientupdate.component.html',
  styleUrls: ['./clientupdate.component.css']
})
export class ClientupdateComponent implements OnInit {
  firm: clientUpdate
  name: names
  coun: any;
  stat: any;
  citi: any;
  b: Boolean = false;
  co: country
  c: city
  s: state
  countryid: any
  ss:any;
  constructor(private us: UsersService, private rt: Router, private cl: ClientService,
    private acr:ActivatedRoute) {
    this.firm = new clientUpdate();
    this.name = new names();
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
  // btnFirmUpdate(myfrm) {
  //   // alert(JSON.stringify(myfrm.value))
  //   this.firm.userId = localStorage.getItem('userId');
  //   if (this.b == true) {
  //     this.firm.firmName = myfrm.value.firmName;
  //     this.firm.description = myfrm.value.description;
  //     this.firm.parentFirm = myfrm.value.parentFirm;
  //     this.firm.address = myfrm.value.address;
  //     this.firm.country = myfrm.value.country;
  //     this.firm.state = myfrm.value.state;
  //     this.firm.city = myfrm.value.city;
  //     this.firm.zipCode = myfrm.value.zipCode;

  //     this.cl.UpdateClientFirmDetails(this.firm,this.ss).subscribe((data) => {
  //       console.log(data)
  //       alert('Update Succesfully....') 
  //       this.rt.navigate(['cprofile'])
  //     })
  //   }
  //   else {
  
  //     this.firm.firmName = myfrm.value.firmName;
  //     this.firm.description = myfrm.value.description;
  //     this.firm.parentFirm = myfrm.value.parentFirm;
  //     this.firm.address = myfrm.value.address;
  //     this.firm.zipCode = myfrm.value.zipCode;
  //      this.firm.country=this.coun;
  //      this.firm.state=this.stat;
  //      this.firm.city=this.citi;
  //      this.cl.UpdateClientFirmDetails(this.firm,this.ss).subscribe((data) => {
  //       alert('Update Succesfully....')
  //       this.rt.navigate(['cprofile'])
  //     })
  //   }
  // }
  ngOnInit() {
    this.us.getcountrydetails().subscribe((data) => {
      console.log(data)
      this.co = data;
    })
    let i = this.acr.snapshot.params.cid;
    this.ss=i;
    //this.firm.userId = localStorage.getItem('userId')
    this.cl.GetFirmByFirmId(i).subscribe((data) => {
      console.log(data)
      // this.countries=data;
      this.coun = data[0].country
      this.stat = data[0].state
      this.citi = data[0].city
      this.firm.firmName = data[0].firmname
      this.firm.description = data[0].description;
      this.firm.parentFirm = data[0].parentfirm;
      this.firm.country = data[0].country;
      this.firm.state = data[0].state;
      this.firm.city = data[0].city;
      this.firm.zipCode = data[0].zipcode;
      this.firm.address = data[0].address;

      this.us.getNames(this.firm.country, this.firm.state, this.firm.city).subscribe((data) => {
        console.log(data)
        this.name = data
        this.name.country = data[0].country
        this.name.state = data[0].state
        this.name.city = data[0].city

      })
    })
  }

}
