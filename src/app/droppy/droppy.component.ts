import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-droppy',
  templateUrl: './droppy.component.html',
  styleUrls: ['./droppy.component.css']
})
export class DroppyComponent implements OnInit {

  droppy: boolean = false

  // dataFields: Object = {text: 'Game', value: 'Id'}
  // localData: Object[] = [
  //   {Id: 'Game1', value: 'American football'},
  //   {Id: 'Game2', value: 'Baseball'},
  //   {Id: 'Game3', value: 'Football'},
  //   {Id: 'Game4', value: 'Hockey'},
  // ]

  localData: string[] = [
    'American football', 'Baseball', 'Football', 'Hockey'
  ]

  showItems(): void {
    this.droppy = !this.droppy
  }

  constructor() { }

  ngOnInit() {
  }

}
