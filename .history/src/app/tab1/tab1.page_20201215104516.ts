import { Component } from '@angular/core';

//declarer classe comme structure d'une todo
class Todo

//decorateur
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  valueInput = '';
  list = [];

  onSavingTodo(event) {
    console.log(this.valueInput);
    this.valueInput 
  }
}
