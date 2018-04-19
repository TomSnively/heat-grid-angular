import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  @Output() gridSizeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  sizeChecked(size){
    console.log('size checked', size);
    this.gridSizeEvent.emit(size);
  }

}
