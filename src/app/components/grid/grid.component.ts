import { Component, Input, OnInit } from '@angular/core';

import { Cell } from '../../interfaces/cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() gridSize: number;
  @Input() maxHeat: number;
  @Input() cellArrays: Cell[][];

  rows: number[];

  constructor() { 
    
  }

  ngOnInit() {
    console.log('grid ngOnInit - gridSize', this.gridSize);
    this.rows = Array(this.gridSize).fill(0).map((x,i)=>i+1);
    
  }

}
