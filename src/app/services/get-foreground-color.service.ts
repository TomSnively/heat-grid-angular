import { Injectable } from '@angular/core';

@Injectable()
export class GetForegroundColorService {

  constructor() { }

  getForegroundColor(heat, maxHeat){
    heat -= 1/100;
    let group = Math.floor((heat / maxHeat) * 2);
    //console.log('temp, maxHeat', heat, maxHeat);
    return `textColor${group}`;
  }

}
