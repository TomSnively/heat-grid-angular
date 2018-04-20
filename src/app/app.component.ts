import { Component, AfterContentChecked } from '@angular/core';

import { InitializeGridDataService } from './services/initialize-grid-data.service';
import { SizeCheckedService } from './services/size-checked.service';
import { HeatIntervalService } from './services/heat-interval.service';
import { CellClickedService } from './services/cell-clicked.service';

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
  currentCellArrays:any;

  constructor(
    private initializeGridDataService:InitializeGridDataService,
    private sizeCheckedService:SizeCheckedService,
    private heatIntervalService:HeatIntervalService,
    private cellClickedService:CellClickedService
  ){ }

  fillArray(gridSize){
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

    this.cellClickedService.currentCellArrays.subscribe(function (cellArrays) {
      this.cellArrays = cellArrays;
    });
  }

  ngAfterContentChecked(){
    //console.log('ngAfterContentChecked ran');
    if (!this.timerRunning){
      //console.log('timer is not running, we are starting it now');
      this.heatIntervalEvent();
      this.timerRunning = true;
    }
  }

  sizeChanged($event) {
    // This executes when the user changes the gridSize on the Input child component
    //console.log('app: sizeChanged ran', $event);
    this.gridSize = $event;
    let dataObject = this.sizeCheckedService.sizeChecked(this.gridSize, this.timerRunning, this.setTimeoutId);
    this.maxHeat = dataObject.maxHeat;
    this.cellArrays = dataObject.cellArrays;
    this.timerRunning = dataObject.timerRunning;
    this.rowsArray = this.fillArray(this.gridSize);
    this.columnsArray = this.fillArray(this.gridSize);
  }

  setAllSelected($event){
    let size = this.gridSize;
    let grid = this.cellArrays;
    for (let i=1; i <= size; i++) {
        for (let j=0; j <= size + 1; j++) {
            grid[i][j].selected = $event;
        }
    }

    this.cellArrays = grid;
      //console.log(this.cellArrays[3][3]);

      if (!this.timerRunning){
          console.log('timer is not running, we are starting it now');
          this.heatIntervalEvent();
          this.timerRunning = true;
      }
  }

  speedChanged(speed){
    this.intervalSpeed = speed;
  }

  heatIntervalEvent(){
    // Set the time for the next update.
    let setTimeoutId = window.setTimeout(function(){
      //console.log('intervalSpeed', this.state.intervalSpeed);
      this.heatIntervalEvent();
    }.bind(this), 1000 / this.intervalSpeed);

    let dataObject = this.heatIntervalService.heatInterval(this.gridSize, this.cellArrays, this.intervalSpeed, this.heatIncrease);
    this.cellArrays = dataObject.cellArrays;
    //console.log('[3][3]', this.cellArrays[3][3]);
    this.totalHeat = dataObject.totalHeat;
    this.setTimeoutId = setTimeoutId;
  }

}


