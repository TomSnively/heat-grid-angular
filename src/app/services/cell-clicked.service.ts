import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CellClickedService {

  private messageSource = new BehaviorSubject<any>(null);
  currentCellArrays = this.messageSource.asObservable();

  constructor() { }

  cellClicked(grid){
    //console.log('in service cellClicked', grid);
    this.messageSource.next(grid);
  }
}
