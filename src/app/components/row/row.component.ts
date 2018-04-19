import { Component, Input, OnInit } from '@angular/core';

import { Cell } from '../../interfaces/cell';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input() rowNumber: number;
  @Input() gridSize: number;
  @Input() maxHeat: number;
  @Input() cellArrays: Cell[][];
  @Input() columnsArray: number[];
  
  constructor() { }

  ngOnInit() {
    console.log('gridSize', this.gridSize);
    //this.columnsArray = Array(this.gridSize).fill(0).map((x,i)=>i+1);
 
  }

}
