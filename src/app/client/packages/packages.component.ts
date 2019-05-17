import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { packages, offerSub } from 'src/app/models/package';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  @Input() pck: any;
  subscr: offerSub
  offers: any[] = []
  surveyid: string
  duration: number;
  packageid: any;
  offerid: any;
  constructor(private serv: ClientService, private acr: ActivatedRoute) {
    this.subscr = new offerSub()
  }
  btnOffers(id) {
    this.serv.offerById(id).subscribe((data) => {
      console.log(data)
      this.offers = data
    })
  }
  btnSubscribe(a, b, c) {
    this.offerid = a
    this.duration = b
    this.packageid = c
  }
  addPackage(a) {
    alert(a)
    this.subscr.surveyId = this.surveyid
    this.subscr.pckId = this.packageid
    this.subscr.startingDate = a
    this.subscr.status = "inactive"
    this.subscr.offerId = this.offerid
    var tomorrow = new Date(a);
    tomorrow.setDate(tomorrow.getDate() + this.duration);
    this.subscr.endingDate = tomorrow
    alert(JSON.stringify(this.subscr))
    this.serv.packSubscribe(this.subscr).subscribe((data) => {
      console.log(data)
    })
  }

  ngOnInit() {
    this.surveyid = this.acr.snapshot.params.a
  }

}
