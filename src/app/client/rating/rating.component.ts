import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() ansTemp: any;
  @Output() countChanged: EventEmitter<string> = new EventEmitter();
  constructor() { }
  btnclick(ans,qid) {
    let ansObj : any = {"questId":qid,"Answer":ans}
    this.countChanged.emit(ansObj)
    //alert(ranking.value)
  }
  ngOnInit() {
  }

}
