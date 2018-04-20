import { Injectable } from '@angular/core';

import { InitializeGridDataService } from './initialize-grid-data.service';

@Injectable()
export class SizeCheckedService {

  constructor(private initializeGridDataService:InitializeGridDataService) { }

  sizeChecked(size, timerRunning, setTimeoutId){
      //console.log('in sizeCheckedService', size);

      let maxHeat;
      if(size === 17) {
          maxHeat = 70.9;
      } else if (size === 13) {
          maxHeat = 42.5;
      } else if (size === 11) {
          maxHeat = 31.0;
      } else if (size === 7) {
          maxHeat = 13.4;
      } else if (size === 5) {
          maxHeat = 7.2;
      } else if (size === 3) {
          maxHeat = 2.8;
      } else {
          console.log ('sizeChecked: invalid size');
      }

      let cellArrays = this.initializeGridDataService.initializeGridData(size);

      if (timerRunning){
          //console.log('turning off the timer');
          clearTimeout(setTimeoutId);
          timerRunning = false;
      }

      return ({
          gridSize: size,
          cellArrays: cellArrays,
          maxHeat: maxHeat,
          timerRunning: timerRunning,
          setTimeoutId: null
      });
  }


}
