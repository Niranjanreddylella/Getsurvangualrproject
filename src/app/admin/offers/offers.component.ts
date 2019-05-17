import { Component, OnInit } from '@angular/core';
import { offers, packages, offer } from 'src/app/models/package';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offer: offers
  pp: any[] = []
  packs: packages[] = []
  alloffer: any[] = []
  togglebtn: Boolean
  toggle: offer
  displayedColumns: string[] = ['offername', 'offerid', 'discount', 'status', 'toggle'];
  color = 'accent';
  checked = true;
  disabled = false;
  constructor(private serv: AdminService) {
    this.toggle = new offer()
    this.offer = new offers()
  }

  btnToggle(element) {
    if (element.status == 'active') {
      alert('inactive')
      this.toggle.status = 'inactive'
      this.toggle.offerName = element.offername
      this.toggle.discount = element.discount
      this.toggle.offerId = element.offerid
      alert(JSON.stringify(this.toggle))
    }
    else {
      alert('active')
      this.toggle.status = 'active'
      this.toggle.offerName = element.offername
      this.toggle.discount = element.discount
      this.toggle.offerId = element.offerid
      alert(JSON.stringify(this.toggle))
    }
    this.serv.updOffers(this.toggle).subscribe((data) => {
      console.log(data)
    })
  }

  btnoffer(frm) {
    if (frm.valid) {
      this.offer.offerName = frm.value.offername;
      this.offer.discount = frm.value.discount;
      this.offer.status = "inactive"
      for (let i = 0; i < this.pp.length; i++) {
        this.offer.packages[i] = this.pp[i]
      }
      this.serv.addOffers(this.offer).subscribe((data) => {
        console.log(data)
      })
      alert(JSON.stringify(this.offer))
    }
  }
  multi(a) {
    if (!this.pp.includes(a)) {
      this.pp.push(a)
    }
    else {
      for (let i = 0; i < this.pp.length; i++) {
        if (this.pp[i] == a) {
          this.pp.splice(i, 1)
        }
      }
    }
  }

  ngOnInit() {
    this.serv.allPacks().subscribe((data) => {
      this.packs = data
      console.log(this.packs)
    })
    this.serv.allOffers().subscribe((data) => {
      this.alloffer = data
      console.log(this.alloffer)
    })
  }

}
