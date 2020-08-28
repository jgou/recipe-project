import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Output() currentHeaderOption = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  OnChangeOption(option: string){
    this.currentHeaderOption.emit(option);
  }
}
