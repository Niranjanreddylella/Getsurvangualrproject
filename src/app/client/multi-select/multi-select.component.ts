import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {
  @Input() ansTemp: any;
  @Output() countChanged: EventEmitter<string> = new EventEmitter();
  select: any[] = []
  constructor() { }
  multiSelect(ans, qid,oid) {
 
    let ansObj: any = { "questId": qid, "Answer": ans ,"optionId" :  oid }
    this.countChanged.emit(ansObj)
  
  }
  ngOnInit() {
  }

}
