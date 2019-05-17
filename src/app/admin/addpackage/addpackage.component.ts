import { Component, OnInit } from '@angular/core';
import { packages } from 'src/app/models/package';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.css']
})
export class AddpackageComponent implements OnInit {
pack : packages
  constructor(private serv:AdminService) {
    this.pack=new packages()
   }
   addPackageBtn(myfrm){
    this.pack.pckName=myfrm.value.pckName;
    this.pack.pckDuration=myfrm.value.pckDuration;
    this.pack.pckPrice=myfrm.value.pckPrice;
    this.pack.pckDescription=myfrm.value.pckDescription;
    alert(JSON.stringify(this.pack))
    this.serv.addPackage(this.pack).subscribe((data)=>{
      console.log(data)
    })
  }
  ngOnInit() {
  }

}
