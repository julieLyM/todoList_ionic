import { Component } from '@angular/core';

//2 --declarer classe comme structure d'une todo
class Todo{
  titre: string;
}

//decorateur
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  //1 -- declarer propriete pour stocker l'input avec ngmodel
  valueInput = '';

  //3--declarer un tableau
  todoList: todo[]

  onSavingTodo(event) {
    console.log(this.valueInput);
    this.valueInput 
  }
}
