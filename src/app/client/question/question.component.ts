import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { questions } from '../../models/ques'
import { surveyQuestion } from '../../models/question'
import { QuesService } from 'src/app/services/ques.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Output() close = new EventEmitter();
  @Output() data: EventEmitter<surveyQuestion> = new EventEmitter()
  @Input() qtype: any
  @Input() surid: any

  option: any[] = [];
  ques: questions
  count: number
  optionCount: number = 3
  srQuestion: surveyQuestion
  opts: any[] = []
  constructor(private ser: QuesService) {
    this.srQuestion = new surveyQuestion()
    this.ques = new questions()
  }


  btnInc() {
    this.optionCount++;
  }

  btnAddQuestion(frm: any) {
    if (this.count < 30) {
      var qt = localStorage.getItem('typeOfUser')
      if (qt == 'client') {
        this.ques.questionType = 'c'
      }
      else {
        this.ques.questionType = 'a'
      }
      this.ques.modelId = this.qtype.modelid
      this.ques.question = frm.value.ques
      this.option[0] = frm.value.txtopt1;
      this.option[1] = frm.value.txtopt2;
      this.option[2] = frm.value.txtopt3;
      this.option[3] = frm.value.txtopt4;
      this.option[4] = frm.value.txtopt5;
      this.option[5] = frm.value.txtopt6;
      this.option[6] = frm.value.txtopt7;
      var filteredopt = this.option.filter(function (el) {
        if (el != null && el != "") {
          return el
        }
      });
      this.ques.optionDescription = filteredopt
      alert(this.ques.question)
      this.ques.clientId = localStorage.getItem('userId')
      this.ques.surveyId = this.surid
      this.ser.addQuestions(this.ques).subscribe((data) => {
        console.log(data)
        this.count++
        this.srQuestion.questionId=data
        this.data.emit(this.srQuestion)
        if (data) {
          this.srQuestion.question = '';
          this.srQuestion.option1 = ''
          this.srQuestion.option2 = ''
          this.srQuestion.option3 = ''
          this.srQuestion.option4 = ''
          this.srQuestion.option5 = ''
          this.srQuestion.option6 = ''
        }
      })
      this.close.emit(null);
    }
    else {
      alert("maximum questions limit reached")
    }
  }
  ngOnInit() {
    // alert(JSON.stringify(this.qtype))
    this.ser.getQuestionCount(this.surid).subscribe((data) => {
      this.count = data[0].count
      console.log(this.count)
    })
  }

}
