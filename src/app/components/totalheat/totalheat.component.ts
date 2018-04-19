import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalheat',
  templateUrl: './totalheat.component.html',
  styleUrls: ['./totalheat.component.css']
})
export class TotalheatComponent implements OnInit {

  @Input() totalHeat: number;

  constructor() { }

  ngOnInit() {

  }

}
