import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuesService } from 'src/app/services/ques.service';
import { questions } from 'src/app/models/ques';

@Component({
  selector: 'app-predefined',
  templateUrl: './predefined.component.html',
  styleUrls: ['./predefined.component.css']
})
export class PredefinedComponent implements OnInit {
  @Input() surid: any
  @Output() preData: EventEmitter<any> = new EventEmitter
  ques: questions
  adminQues: any[] = []
  droppedItems: any[] = []
  view: Boolean = false

  onItemDrop(e: any) {
    this.droppedItems.push(e.dragData);
    console.log(this.droppedItems)
    this.view = true
  }
  constructor(private ser: QuesService) {
    this.ques = new questions()
  }

  removeDetails(list) {
    for (let i = 0; i < this.droppedItems.length; i++) {
      if (this.droppedItems[i] == list) {
        this.droppedItems.splice(i, 1)
      }
    }
  }
  btnAddQuestions() {
    for (let i = 0; i < this.droppedItems.length; i++) {
      this.ques.modelId = this.droppedItems[i].modelid
      for (let j = 0; j < this.droppedItems[i].optiondescription.length; j++) {
        this.ques.optionDescription[j] = this.droppedItems[i].optiondescription[j].f1
      }
      this.ques.question = this.droppedItems[i].question
      this.ques.questionId = this.droppedItems[i].questionid
      this.ques.questionType = "c"
      this.ques.clientId = localStorage.getItem('userId')
      this.ques.surveyId = this.surid
      alert(JSON.stringify(this.ques))
      this.preData.emit(this.ques)

      this.ser.addQuestions(this.ques).subscribe((data) => {
        console.log(data)
        this.droppedItems.length =0;
      })
    }
  }
  ngOnInit() {
    this.ser.getPreDefined().subscribe((data) => {
      this.adminQues = data
      console.log(data)
    })
  }

}
