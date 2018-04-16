import { Component, Input, OnInit } from '@angular/core';

import { Cell } from '../../interfaces/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() gridSize: number;
  @Input() cellArrays: Cell[][];
  @Input() rowNumber: number;
  @Input() cellNumber: number;
  cell: Cell;
  borderStyle: string;

  constructor() { }

  ngOnInit() {
    this.cell = this.cellArrays[this.rowNumber][this.cellNumber];
    this.borderStyle = this.cell.selected ? 'redBorder' : 'blackBorder';
  }

}
