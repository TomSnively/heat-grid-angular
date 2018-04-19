import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CellClickedService {

  private messageSource = new BehaviorSubject<any>(null);
  // This broadcasts the initial value
  currentCellArrays = this.messageSource.asObservable();

  constructor() { }

  cellClicked(grid){
    //console.log('in service cellClicked', grid);
    // This sends out the new version
    this.messageSource.next(grid);
  }
}
