import { Component, OnInit } from '@angular/core';
import { questions } from 'src/app/models/ques';
import { QuesService } from 'src/app/services/ques.service';
import { SurvService } from 'src/app/services/surv.service';
import { ActivatedRoute } from '@angular/router';
import { sur } from 'src/app/models/survey';
import { surveyQuestion } from 'src/app/models/question';
import { ClientService } from 'src/app/services/client.service';

class newQuest {
  question: string;
  optiondescription: any[];
  modelid: number;
  questionid: number;
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  questSelect: boolean = false;
  showChild: boolean = true
  showEdit:boolean=false
  optarray: any[] = []
  srQues: surveyQuestion
  ques: questions;
  option: any[] = [];
  optid: any = 1;
  modelid: number;
  qtypObj: any = {};
  sid: string;
  username: string;
  count: number;
  su: sur;
  questiontype: any[] = []
  quesData: any[] = []
  predefined: boolean = false
  adminQues: any[] = []
  constructor(private ser: QuesService, private serv: SurvService, private acr: ActivatedRoute,
    private cl: ClientService) {
    this.ques = new questions()
  }
  preBtn() {
    this.predefined = true
    this.questSelect = false
  }
  btnadd($event) {
    let qObj: newQuest;
    qObj = new newQuest();
    qObj.optiondescription = [];
    this.count++
    this.srQues = $event
    if (this.srQues.optionDescription) {
      for (let i = 0; i < this.srQues.optionDescription.length; i++) {
        this.option[i] = this.srQues.optionDescription[i]
      }
      qObj.modelid = this.srQues.modelId
    }
    else {
      this.option[0] = this.srQues.option1
      this.option[1] = this.srQues.option2
      this.option[2] = this.srQues.option3
      this.option[3] = this.srQues.option4
      this.option[4] = this.srQues.option5
      this.option[5] = this.srQues.option6
      qObj.modelid = this.qtypObj.modelid
    }
    let opt = this.option.filter(function (el) {
      return el != null
    })
    this.optarray.length = 0;
    for (let i = 0; i < opt.length; i++) {
      qObj.optiondescription.push({ 'f1': opt[i] })
    }
    alert("new opt array" + JSON.stringify(qObj.optiondescription))
    qObj.question = this.srQues.question;
    qObj.questionid = this.srQues.questionId
    this.quesData.push(qObj);
    alert("Questions Data : " + JSON.stringify(this.quesData));
  }

  btnQuesEdit(questModel) {
    // alert(questModel)
    this.showEdit = true;
    this.qtypObj.modelid = questModel;
    this.predefined = false
  }


  btnQuesModel(questModel: any) {
    this.questSelect = true;
    this.showChild = true;
    this.qtypObj = questModel;
    this.predefined = false
  }
  btnDelOpt(opt: any, topt: any) {
    alert(opt)
    topt.value = "";
    opt.style.display = 'none'
  }
  btnDelques(qid) {
    this.cl.deleteQuestById(qid).subscribe((data) => {
      if (data) {
        for (let i = 0; i < this.quesData.length; i++) {
          if (this.quesData[i].questionid == qid) {
            this.quesData.splice(i, 1);
          }
        }
      }
    })
  }
  ngOnInit() {
    this.username = localStorage.getItem('username')
    this.sid = this.acr.snapshot.params.a;
    this.serv.getSurvey(this.sid).subscribe((data) => {
      console.log(data)
      this.su = data[0]
    })
    this.ser.getQuestionModel().subscribe((data) => {
      console.log(data)
      this.questiontype = data
    })
    this.ser.getQuestionCount(this.sid).subscribe((data) => {
      this.count = data[0].count
      console.log(this.count)
    })
    this.ser.getQuesOpt(this.sid).subscribe((data) => {
      console.log(data)
      this.quesData = data
    })
    this.ser.getPreDefined().subscribe((data) => {
      this.adminQues = data
    })
  }
}