import { Component, OnInit } from '@angular/core';
import {packages }from 'src/app/models/package'; 
import {AdminService }from 'src/app/services/admin.service'; 
import {Router, ActivatedRoute }from '@angular/router'; 

@Component({
  selector: 'app-editpackage',
  templateUrl: './editpackage.component.html',
  styleUrls: ['./editpackage.component.css']
})
export class EditpackageComponent implements OnInit {
  epckg:packages
  constructor(private as:AdminService, private rt:Router, private acr:ActivatedRoute) {
    this.epckg = new packages()
   }
   btneditpckg(){
     this.as.Updatepckg(this.epckg).subscribe((data)=>{
     console.log(data);
     this.rt.navigate(['packages'])
   })
      }
  ngOnInit() {
    let i = this.acr.snapshot.params.pckid
    alert(i)
this.as.pckgById(i).subscribe((data) =>  {
console.log(data)
this.epckg.pckId = data[0].pckid
    this.epckg.pckName = data[0].pckname
    this.epckg.pckDescription = data[0].pckdescription
    this.epckg.pckPrice = data[0].pckprice 
    this.epckg.pckDuration = data[0].pckduration  
 })
  }

}
