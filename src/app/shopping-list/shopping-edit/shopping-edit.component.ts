import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;

  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  OnNewIngredient(){
    const name = this.nameRef.nativeElement.value;
    const amount = this.amountRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.newIngredient.emit(ingredient);
  }
}
