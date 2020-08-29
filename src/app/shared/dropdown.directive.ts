import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: 'appDropdown'
})
export class DropdownDirective {
  constructor() { }

  @HostBinding('class.show') isOpened = false;

  @HostListener('click') clickDropdown(){
    console.log('clickDropdown');
    this.isOpened = !this.isOpened;
  }
}
