import { Component, OnInit } from '@angular/core';
import {packages }from 'src/app/models/package'; 
import {AdminService }from 'src/app/services/admin.service'; 
import {Router }from '@angular/router'; 

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  pack:packages
  constructor(private serv:AdminService, private rt:Router) {
    this.pack = new packages()
   }
   btndel(pckId) {
    console.log(pckId)
    alert(pckId)
this.serv.Deletepck(pckId).subscribe((data) =>  {
console.log(data); 
alert('Deleted Success...')
this.rt.navigate(['ahome'])

})
}

btnedit(pckid) {
alert(pckid)
this.rt.navigate(['editpackage/' + pckid])
}

btnadd() {
this.rt.navigate(['addpackage'])
}
  ngOnInit() {
    this.serv.allPacks().subscribe((data) =>  {
      this.pack = data
    }); 
  }

}
