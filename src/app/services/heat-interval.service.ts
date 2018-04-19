import { Injectable } from '@angular/core';

@Injectable()
export class HeatIntervalService {

  constructor() { }

  heatInterval(size, grid, intervalSpeed, heatIncrease){
    //console.log('heat interval ran');

    for (let i = 1; i <= size; i++) {
      for (let j = 1; j <= size; j++) {
          // First, increase temperature for all selected by 1 degree.
          if (grid[i][j].selected) {
              grid[i][j].temperature += heatIncrease;
          }
          // Then, save a copy of the temperatures so we can do averages based on them.
          grid[i][j].lasttemp = grid[i][j].temperature;
      }
    }

    // Now set new temperatures based on the average of your temperature and the cell on each side of you.
    // Note: cells on the edge and on the corners have invisible cells off the grid whose temp is always 0.
    for (let i = 1; i <= size; i++) {
      for (let j = 1; j <= size; j++) {
          grid[i][j].temperature = (
              grid[i-1][j-1].lasttemp +
              grid[i-1][j].lasttemp +
              grid[i-1][j+1].lasttemp +
              grid[i][j-1].lasttemp +
              grid[i][j].lasttemp +
              grid[i][j+1].lasttemp +
              grid[i+1][j-1].lasttemp +
              grid[i+1][j].lasttemp +
              grid[i+1][j+1].lasttemp
          ) / 9;
      }
  }

    let totalHeat = 0;
    for (let i = 1; i <= size; i++) {
      for (let j = 1; j <= size; j++) {
          totalHeat += grid[i][j].temperature;
      }
  }

    return ({
      cellArrays: grid,
      totalHeat: Math.round(totalHeat*10)/10
  });

  }

}
