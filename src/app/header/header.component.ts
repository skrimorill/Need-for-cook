import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpened: boolean = false;
  @Output() featureSelected = new EventEmitter<string>()

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  onSelect(feature: string): void { 
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
  }

}
