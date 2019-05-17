import { ClientService } from 'src/app/services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  packages: any[];
  
  constructor(private serv: ClientService) { }

  ngOnInit() {
    this.serv.allPacks().subscribe((data) => {
      console.log(data)
            this.packages = data;
    })
  }

}
