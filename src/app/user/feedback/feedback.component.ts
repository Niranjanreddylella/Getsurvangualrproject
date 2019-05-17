import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { feedback } from '../../models/user';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  fed : feedback
  constructor(private rt:Router,private ser:UsersService) { 
    this.fed = new feedback();
  }

  btnclick(myfrm) {
    if (myfrm.valid) {
      this.fed.userid=localStorage.getItem('userId');
      let b = localStorage.getItem('typeOfUser')
      this.ser.insertfeedback(this.fed).subscribe((data) => {
        console.log(data);
        if (b == 'user') {
          this.rt.navigate(['uhome'])
        }
        else if (b == 'client') {
          this.rt.navigate(['chome'])
        }
        alert('Thank you!!!! for your valuable feedback');
      });
     // this.rt.navigate(['uhome']); 
    }
    else{
      alert('enter your feedback')
    }
  }

  ngOnInit() {
  }

}
