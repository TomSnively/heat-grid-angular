import { Injectable } from '@angular/core';

import { Cell } from '../interfaces/cell';

@Injectable()
export class InitializeGridDataService {

  constructor() { }

  initializeGridData(size){
    // initialize a 2-dimensional array
    let grid = new Array(size + 1);
    for (let i:number=0; i <= size + 1; i++) {
        grid[i] = new Array(size + 1);
    }

    // the grid is going to go from 0 to gridsize+1.
    // The 0 row and column and gridsize+1 row and column will have temperature 0, and never change.
    //console.log ('initializing grid data...');
    for (let i:number=0; i <= size + 1; i++) {
        for (let j:number=0; j <= size + 1; j++) {
            grid[i][j] = new Cell;
            grid[i][j].temperature = 0;
            grid[i][j].lasttemp = 0;
            grid[i][j].selected = false;     // should start off
        }
    }

    return grid;
  }

}
