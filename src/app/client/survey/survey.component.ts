import { Component, OnInit } from '@angular/core';
import { sur } from '../../models/survey';
import { Router, NavigationExtras } from '@angular/router';
import { SurvService } from '../../services/surv.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  survey: sur
  a: string
  
  constructor(private rt: Router, private ser: SurvService) { 
    this.survey = new sur()
  }

 onFileSelect(event) {

    if (event.target.files && event.target.files[0]) {
      let rdr = new FileReader();
      rdr.readAsDataURL(event.target.files[0])
      rdr.onload = (ev: any) => {
        this.survey.image = ev.target.result
      }
    }
    console.log(this.survey.image)
  }
  btnSurveyAdd(frm) {
    if (frm.valid) {
      this.survey.image = this.survey.image.replace("data:image/jpeg;base64,", "")
      this.survey.image = this.survey.image.replace("data:image/jpg;base64,", "")
      this.survey.image = this.survey.image.replace("data:image/png;base64,", "")
      this.survey.image = this.survey.image.replace("data:image/gif;base64,", "")
      this.survey.surveyName = frm.value.surveyName
      this.survey.status = "inactive"
      this.survey.rewards = frm.value.rewards
      this.survey.clientId = localStorage.getItem('userId')

      alert(JSON.stringify(this.survey))
      this.ser.addSurvey(this.survey).subscribe((data) => {
        console.log(data)
        this.a = data[0].fn_addsurvey
        this.rt.navigate(['questions/' + this.a])
      })
    }
  }


  ngOnInit() {
  }

}
