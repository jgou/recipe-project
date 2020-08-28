import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentOption: string = 'recipes';

  OnNavigate(option: string){
    this.currentOption = option;
  }
}
