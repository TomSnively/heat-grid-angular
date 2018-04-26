import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Cell } from '../../interfaces/cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridSizeStyle: {};

  @Input() gridSize: number;
  @Input() rowsArray: number[];
  @Input() columnsArray: number[];
  @Input() maxHeat: number;
  @Input() cellArrays: Cell[][];

  constructor() { 
    
  }

  ngOnInit() {
    this.gridSizeStyle = {
      'width': '330px',
      'height': '330px'
    };
  }


  ngOnChanges() {
    this.gridSizeStyle = {
      'width': `${this.gridSize * 30}px`,
      'height': `${this.gridSize * 30}px`
    };
  }

}
