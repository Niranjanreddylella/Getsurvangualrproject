import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurvService } from 'src/app/services/surv.service';
import { image } from 'src/app/models/survey';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  survey: any[] = []
  surveyid: string
  imag: image
  list: any;
  us: any;
  
  constructor(private rt:Router,private ser:SurvService) {
    this.imag = new image()
   }

   addQuestions(a) {
    this.rt.navigate(['questions/' + a])
  }
  addPackage(a) {
    this.rt.navigate(['subscribe/' + a])
  }

  img(event, a) {
    alert(a)
    if (event.target.files && event.target.files[0]) {
       let rdr = new FileReader();
        rdr.readAsDataURL(event.target.files[0])
        rdr.onload = (ev: any) => {
          this.imag.image = ev.target.result
          this.imag.image = this.imag.image.replace("data:image/jpeg;base64,", "")
          this.imag.image = this.imag.image.replace("data:image/jpg;base64,", "")
          this.imag.image = this.imag.image.replace("data:image/png;base64,", "")
          this.imag.image = this.imag.image.replace("data:image/gif;base64,", "")
        //  this.imag.surveyId = localStorage.getItem('userId')
           alert(this.imag.image)
         this.imag.surveyId = a
         alert(this.imag.surveyId)
         console.log(this.imag)
          this.ser.updateSurveyImage(this.imag).subscribe((data) => {
          this.list = data
     })
         location.reload();
        }
      }
  }
  ngOnInit() {
    let i = localStorage.getItem('userId')
    this.ser.getSurveyByClientId(i).subscribe((data) => {
      console.log(data)
      this.survey = data
    })
    
  }

}
