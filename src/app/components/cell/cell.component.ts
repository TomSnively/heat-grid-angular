import { Component, Input, OnInit, AfterContentChecked } from '@angular/core';

import { Cell } from '../../interfaces/cell';

import { GetBackgroundColorService } from '../../services/get-background-color.service';
import { GetForegroundColorService } from '../../services/get-foreground-color.service';
import { CellClickedService } from '../../services/cell-clicked.service';


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
  Math: any;

  constructor(
    private getBackgroundColorService:GetBackgroundColorService,
    private getForegroundColorService:GetForegroundColorService,
    private cellClickedService:CellClickedService
  ) { } 

  ngOnInit() {
    this.cellClickedService.currentMessage.subscribe(cellLocation => this.cellLocation = cellLocation)

    this.Math = Math;
  }

  ngAfterContentChecked(){
    this.cell = this.cellArrays[this.rowNumber][this.cellNumber];
    this.borderStyle = this.cell.selected ? 'redBorder' : 'blackBorder';
    this.heatColorStyle = this.getBackgroundColorService.getBackgroundColor(this.cell.temperature, this.maxHeat);
    this.textColorStyle = this.getForegroundColorService.getForegroundColor(this.cell.temperature, this.maxHeat);
  }

  cellSelected(){
    console.log('cell clicked', this.rowNumber, this.cellNumber);
    this.cellClickedService.cellClicked({
       row: this.rowNumber,
       cell: this.cellNumber
    });
  }

}
