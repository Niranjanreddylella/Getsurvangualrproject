import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit {
  @Input() ansTemp: any;
  @Output() countChanged: EventEmitter<string> = new EventEmitter();
  options: any[] = []
  constructor() {
  }

  btnOption(ans, qid) {
    //alert(ans + ' ' +qid)
    let ansObj : any = {"questId":qid,"Answer":ans}
    this.countChanged.emit(ansObj)
  }

  ngOnInit() {
  }

}
