import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { user ,survey ,img,  trsurvey} from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  test : trsurvey[]=[]
  name : boolean = false
  buton : boolean = false
    constructor(private us:UsersService,private rt:Router) {
   }

   getProfile(email){
      this.rt.navigate(['profile'])
   }
   changepwd(email){
     this.rt.navigate(['cpwd'])
   }

 

  trend(){
    this.us.trendingSurveys().subscribe((data)=>{
      this.test = data
      this.name = false
      this.buton = false
      console.log(data)
    })
  }
  ongoing(){
    this.us.ongoingsurveys().subscribe((data)=>{
      this.test=data
      this.name = false
      this.buton = false
      console.log(data)
    })
  }
  upcoming(){
    this.us.Getupcmgsurvey().subscribe((data)=>{
      this.test = data
      this.name  = true
     this.buton = true
      console.log(data)
    })
  }
  completed(){
    this.us.getcompletedsurvey().subscribe((data)=>{
      this.test = data
      this.name = false
      this.buton = true
      console.log(data)
    })
  }

  startSurvey(i){
    this.rt.navigate(['dosurvey/' +i])
  }

  ngOnInit() {
    // this.details.emailId = localStorage.getItem('emailId')
    // this.us.GetByEmail(this.details.emailId).subscribe((data)=>{ this.list = data
    //     console.log(data)
    //   this.details.firstName =data[0].firstname
    //   this.details.lastName = data[0].lastname
    //   this.details.userId = data[0].userid
    //   this.details.image = data[0].img;

    //   this.us.Getrewardpoints(this.details.userId).subscribe((data)=>{
    //     this.list=data
    //     console.log(data)
    //    if(data[0].rewards==null){
    //      this.surveydetails.rewards="0" ;
    //    }
    //    else
    //    {
    //      this.surveydetails.rewards=data[0].rewards;
    //    }
    //  })
    //  this.us.Getsurveycount(this.details.userId).subscribe((data)=>{ this.list=data
    //   console.log(data)
    //    this.surveycount.surveycou=data[0].surveid
    //    console.log(this.surveycount.surveycou)
    //  })
    // })

    this.us.trendingSurveys().subscribe((data)=>{
      this.test = data
      console.log(data)
    })

}
}
