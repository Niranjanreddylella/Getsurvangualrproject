import { Component, OnInit } from '@angular/core';
import { img } from '../models/user';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  change: boolean = false;
  imag: img;
  im: any;
  list: any;
  constructor(private rt: Router, private use: UsersService) {
    this.imag = new img();
  }
  btnsave() {
    // alert("hii")

  }
  img(event) {
    // this.change = false
    if (event.target.files && event.target.files[0]) {
      let rdr = new FileReader();
      rdr.readAsDataURL(event.target.files[0])
      rdr.onload = (ev: any) => {
        this.imag.image = ev.target.result
        // this.im = ev.target.result
        alert(this.imag.image)
        this.imag.image = this.imag.image.replace("data:image/jpeg;base64,", "")
        this.imag.image = this.imag.image.replace("data:image/jpg;base64,", "")
        this.imag.image = this.imag.image.replace("data:image/png;base64,", "")
        this.imag.image = this.imag.image.replace("data:image/gif;base64,", "")
        this.imag.uid = 'rk'
        this.use.imgpost(this.imag).subscribe((data) => {
          this.list = data
        })
      }
    }
  }
  ngOnInit() {
  }

}
