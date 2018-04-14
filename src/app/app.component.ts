import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Initial state
  gridSize:number = 11;
  heatIncrease:number = 1;
  intervalSpeed:number = 5;
  maxHeat:number = 31;
  timerRunning:boolean = false;
  setTimeoutId:number = null;
  totalHeat:number = 0;
  cellArrays:Cell[][];

  constructor(){
    
  }

  ngOnInit(){
    let size = this.gridSize;

    let grid = new Array(size + 1);
    for (let i=0; i <= size + 1; i++) {
        grid[i] = new Array(size + 1);
    }


  }


}

interface Cell {
  temperature:Number;
  lasttemp:Number;
  selected:boolean;
}
