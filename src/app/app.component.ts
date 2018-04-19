import { Component } from '@angular/core';

import { InitializeGridDataService } from './services/initialize-grid-data.service';
import { SizeCheckedService } from './services/size-checked.service';

import { Cell } from './interfaces/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Initial state
  gridSize:number = 11;
  rowsArray: number[];
  columnsArray: number[];
  heatIncrease:number = 1;
  intervalSpeed:number = 5;
  maxHeat:number = 31;
  timerRunning:boolean = false;
  setTimeoutId:number = null;
  totalHeat:number = 0;
  cellArrays:Cell[][];

  constructor(
    private initializeGridDataService:InitializeGridDataService,
    private sizeCheckedService:SizeCheckedService
  ){ }

  fillArray(gridSize){
    console.log('fillArray ran', gridSize);
    return Array(this.gridSize).fill(0).map((x,i)=>i+1);
  }

  ngOnInit(){
    let size = this.gridSize;

    let grid = new Array(size + 1);
    for (let i=0; i <= size + 1; i++) {
      grid[i] = new Array(size + 1);
    }

    grid = this.initializeGridDataService.initializeGridData(this.gridSize);
    this.rowsArray = this.fillArray(this.gridSize);
    this.columnsArray = this.fillArray(this.gridSize);
    this.cellArrays = grid;
  }

  sizeChanged($event) {
    // This executes when the user changes the gridSize on the Input child component
    console.log('app: sizeChanged ran', $event);
    this.gridSize = $event;
    let dataObject = this.sizeCheckedService.sizeChecked(this.gridSize);
    this.maxHeat = dataObject.maxHeat;
    this.cellArrays = dataObject.cellArrays;
    this.rowsArray = this.fillArray(this.gridSize);
    this.columnsArray = this.fillArray(this.gridSize);
  }

}


