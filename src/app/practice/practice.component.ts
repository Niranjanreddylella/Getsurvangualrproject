import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  @Input() arr: any
  @Output() arry: EventEmitter<any> = new EventEmitter()
  a: string
  constructor() { }
  btnClick() {
    this.a = 'venkatesh'
    this.arry.emit(this.a)
  }
  ngOnInit() {
    alert(JSON.stringify(this.arr))
  }
}