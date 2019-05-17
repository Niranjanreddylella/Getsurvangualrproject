import { Component, OnInit,Input ,Output,EventEmitter } from '@angular/core';
import { answers } from 'src/app/models/ques';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() ansTemp: any;
  @Output() countChanged: EventEmitter<string> = new EventEmitter();
  ans : answers
  constructor() { 
    this.ans = new answers();
  }
  dropdown(ans,qid) {
    let ansObj : any = {"questId":qid,"Answer":ans}
    this.countChanged.emit(ansObj)
  }
  ngOnInit() {
  }

}
