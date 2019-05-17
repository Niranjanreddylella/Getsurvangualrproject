import { Component, OnInit ,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {
  @Input() ansTemp: any;
  @Output() countChanged: EventEmitter<string> = new EventEmitter();
  constructor() { }
  btnText(ans,qid){
    let ansObj : any = {"questId":qid,"Answer":ans}
    this.countChanged.emit(ansObj)
  }
  ngOnInit() {
  }

}
