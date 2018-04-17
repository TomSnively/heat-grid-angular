import { Injectable } from '@angular/core';

@Injectable()
export class GetBackgroundColorService {

  constructor() { }

  getBackgroundColor(heat: number, maxHeat: number){
    heat -= 1/100;
    let group = Math.floor((heat / maxHeat) * 12) + 1;
    //console.log('temp, maxHeat', heat, maxHeat);
    return `heatColor${group}`;
  }

}
