import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuesService } from '../../services/ques.service';
import { questions, options, opts,qmodel } from '../../models/ques';
import { sur, survid } from '../../models/survey';
import { SurvService } from '../../services/surv.service';
import { AlertPromise } from 'selenium-webdriver';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  a: number                     //for option increnment
  op: opts                      //for options model
  multi: Boolean = false        //To display options template 
  sin: Boolean = false          //for hide options template
  // bool:Boolean=false            //To display true or false template
  ques: questions               //for questions model
  option: any[] = []            //options array to store values
  opt: options                  //options details model
  model: any                    //for different questions types or models
  su: sur                       //to store survey details
  count: number             //To fill the symbols based on questions added
  custom: Boolean = true
  questionModel: qmodel         //Question models or types model
  sid: string                    //to store surveyid
  username: string                   //to store surveyid
  constructor(private rt: Router, private ser: QuesService, private acr: ActivatedRoute, private serv: SurvService) {
    this.ques = new questions()
    this.opt = new options()
    this.op = new opts()
    this.su = new sur()
    this.questionModel = new qmodel()
   }

   customSurvey() {
    this.custom = true
  }
  preDefinedSurvey() {
    this.custom = false
  }
  btnChange(opt) {
    alert(opt)
    this.model = opt
    if (opt == 4 || opt == 5) {
      this.multi = true
      this.sin = false
      this.a = 1
    }
    else if (opt == 7) {
      this.multi = false
      this.sin = true
    }
  }
  btnInc() {
    this.a++;
  }
  btnAddQuestion(a) {
    if (this.count < 30) {
      let i = localStorage.getItem('typeOfUser')
      if (i == 'client') {
        this.ques.questionType = "c"
      }
      else {
        this.ques.questionType = "a"
      }
      this.ques.modelId = this.model
      let user = localStorage.getItem('userId')
      if (user == null) {
        this.ques.clientId = 'admin'
      }
      else {
        this.ques.clientId = user
      }
      this.ques.question = a
      this.option[0] = this.opt.opt1;
      this.option[1] = this.opt.opt2;
      this.option[2] = this.opt.opt3;
      this.option[3] = this.opt.opt4;
      this.option[4] = this.opt.opt5;
      this.option[5] = this.opt.opt6;
      this.option[6] = this.opt.opt7;
      this.option[7] = this.opt.opt8;
      this.option[8] = this.opt.opt9;

      var filteredopt = this.option.filter(function (el) {
        return el != null;
      });
      this.ques.optionDescription = filteredopt;
      alert(this.ques.optionDescription);
      this.ques.questionId = 1
      this.ques.surveyId = this.sid;
      this.ser.addQuestions(this.ques).subscribe((data) => {
        console.log(data)
        this.count++
      })
    }
    else {
      alert("maximum question limit reached")
    }
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
      this.questionModel = data
    })
    this.ser.getQuestionCount(this.sid).subscribe((data) => {
      this.count = data[0].count
      console.log(this.count)
    })
  }

}
