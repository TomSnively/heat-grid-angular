import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  @Output() gridSizeEvent = new EventEmitter<number>();
  @Output() setAllSelectedEvent = new EventEmitter<boolean>();
  @Output() speedChangedEvent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  sizeChecked(size){
    //console.log('size checked', size);
    this.gridSizeEvent.emit(size);
  }

  turnAllOn(){
    //console.log('in turnAllOn');
    this.setAllSelectedEvent.emit(true);
  }

  turnAllOff(){
    //console.log('in turnAllOff');
    this.setAllSelectedEvent.emit(false);
  }
  
  speedChanged($event){
    //console.log('speedChanged', $event.target.value);
    this.speedChangedEvent.emit($event.target.value);
  }

}
