import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.css']
})
export class YesNoComponent implements OnInit {
  @Input() ansTemp: any;
  @Output() countChanged: EventEmitter<string> = new EventEmitter();
  constructor() { }
  SelectYRN(ans,qid){
    let ansObj : any = {"questId":qid,"Answer":ans}
    this.countChanged.emit(ansObj)
  }
  ngOnInit() {
  }

}
