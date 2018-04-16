import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() rowNumber: number;
  @Input() gridSize: number;
  columns: number[];
  
  constructor() { }

  ngOnInit() {
    console.log('gridSize', this.gridSize);
    this.columns = Array(this.gridSize).fill(0).map((x,i)=>i+1);
 
  }

}
