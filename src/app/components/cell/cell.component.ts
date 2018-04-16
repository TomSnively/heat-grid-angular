import { Component, Input, OnInit } from '@angular/core';

import { Cell } from '../../interfaces/cell';

import { GetBackgroundColorService } from '../../services/get-background-color.service';
import { GetForegroundColorService } from '../../services/get-foreground-color.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() gridSize: number;
  @Input() maxHeat: number;
  @Input() cellArrays: Cell[][];
  @Input() rowNumber: number;
  @Input() cellNumber: number;
  cell: Cell;
  borderStyle: string;
  heatColorStyle: string;
  textColorStyle: string;

  constructor(
    private getBackgroundColorService: GetBackgroundColorService,
    private getForegroundColorService: GetForegroundColorService) {
  }

  ngOnInit() {
    this.cell = this.cellArrays[this.rowNumber][this.cellNumber];
    this.borderStyle = this.cell.selected ? 'redBorder' : 'blackBorder';
    //this.heatColorStyle = this.getBackgroundColorService.getBackgroundColor(this.cell.temperature, this.maxHeat);
    //this.textColorStyle = this.getForegroundColorService.getForegroundColor(this.cell.temperature, this.maxHeat);
  }

}
