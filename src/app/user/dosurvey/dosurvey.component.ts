import { Component, OnInit, Input } from '@angular/core';
import { questions } from 'src/app/models/ques';
import { QuesService } from 'src/app/services/ques.service';
import { ActivatedRoute } from '@angular/router';
import { sur } from 'src/app/models/survey';
import { element } from '@angular/core/src/render3/instructions';
import { UsersService } from 'src/app/services/users.service';
import { Answers } from 'src/app/models/user';

@Component({
  selector: 'app-dosurvey',
  templateUrl: './dosurvey.component.html',
  styleUrls: ['./dosurvey.component.css']
})
export class DosurveyComponent implements OnInit {
  ques: questions;
  modelid: number;
  userAnswers: any[] = [];
  sid: string;
  i: any;
  quesData: any[] = []
   flag: boolean = false;
   sanswers : Answers
  constructor(private ser: QuesService, private acr: ActivatedRoute,private us:UsersService) {
    this.ques = new questions()
    this.sanswers = new Answers()
  }
  MultipleChoice(userSelOption: any): void {
    alert("Parent Compo : " + JSON.stringify(userSelOption))
    
    this.userAnswers.forEach(element => {
      if (element.questId == userSelOption.questId) {
        element.Answer = userSelOption.Answer
        this.flag = true;
      }
    });
    if (!this.flag) {
      this.userAnswers.push(userSelOption)
    }

    console.log(this.userAnswers);
  }
  DropDown(userSelOption1 : any) : void {
    alert("Parent Compo: " +JSON.stringify(userSelOption1))
    this.userAnswers.forEach(element => {
        if(element.questId == userSelOption1.questId){
          element.Answer = userSelOption1.Answer
          this.flag = true;
        }
    });
    if (!this.flag) {
      this.userAnswers.push(userSelOption1)
    }
    console.log(this.userAnswers);
  }

  YesNO(userSelOption2 : any)  : void {
    alert("Parent Compo: " +JSON.stringify(userSelOption2))
    this.userAnswers.forEach(element => {
      if(element.questId == userSelOption2.questId){
        element.Answer = userSelOption2.Answer
        this.flag = true;
      }
  });
  if (!this.flag) {
    this.userAnswers.push(userSelOption2)
  }
  console.log(this.userAnswers);
  }

  TextField(userSelOption3 : any) : void {
   // alert("Parent Compo: " +JSON.stringify(userSelOption3))
    this.userAnswers.forEach(element => {
      if(element.questId == userSelOption3.questId){
        element.Answer = userSelOption3.Answer
        this.flag = true;
      }
  });
  if (!this.flag) {
    this.userAnswers.push(userSelOption3)
  }
  console.log(this.userAnswers);
  }
  Ranking(userSelOption4 : any) : void {
    alert("Parent Compo: " +JSON.stringify(userSelOption4))
    this.userAnswers.forEach(element => {
      if(element.questId == userSelOption4.questId){
        element.Answer = userSelOption4.Answer
        this.flag = true;
      }
  });
  if (!this.flag) {
    this.userAnswers.push(userSelOption4)
  }
  console.log(this.userAnswers);
  }

  multiSelects(userSelOption5 : any) : void {
    alert("Parent Compo: " +JSON.stringify(userSelOption5))
    this.userAnswers.forEach(element =>{
      if(element.optionId == userSelOption5.optionId){
          this.userAnswers.splice(element,1)
           this.flag = true
      }
    });
    if(!this.flag){
      this.userAnswers.push(userSelOption5)
    }
    console.log(this.userAnswers)
  }

  submitSurvey() {
    this.sanswers.userId = localStorage.getItem('userId')
    //alert(u)

    this.sanswers.surveyId = this.acr.snapshot.params.i;
    //alert(s)
     this.sanswers.answer = this.userAnswers
    this.us.submitAnswer(this.sanswers).subscribe((data)=>{
      console.log(data)

    })
  }

  ngOnInit() {
    this.sid = this.acr.snapshot.params.i;
    //alert(this.sid)
    this.ser.getQuesOpt(this.sid).subscribe((data) => {
      console.log(data)
      this.quesData = data
      // alert(JSON.stringify(this.quesData))
    })
  }

}
