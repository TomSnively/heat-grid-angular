import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CellClickedService {

  private messageSource = new BehaviorSubject<any>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  cellClicked(cellLocation){
    console.log('in service cellClicked', cellLocation);
    this.messageSource.next(cellLocation);
  }
}
