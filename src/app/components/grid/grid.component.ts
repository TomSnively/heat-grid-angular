import { Component, Input, OnInit } from '@angular/core';

import { Cell } from '../../interfaces/cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() gridSize: number;
  @Input() rowsArray: number[];
  @Input() columnsArray: number[];
  @Input() maxHeat: number;
  @Input() cellArrays: Cell[][];

  constructor() { 
    
  }

  ngOnInit() {
    console.log('grid ngOnInit - gridSize', this.gridSize);
    
  }

}
