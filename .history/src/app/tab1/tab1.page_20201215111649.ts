import { Component } from '@angular/core';

//2 --declarer classe comme structure d'une todo
class Todo {
  titre: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  //1 -- declarer propriete pour stocker l'input avec ngmodel
  valueInput = '';

  //3--declarer un tableau vide todoList
  todoList: Todo[] = [];

  onSavingTodo() {
    let newTodo = new Todo();
    newTodo.titre = this.valueInput;
    this.todoList.push(newTodo);
    console.log('todoList', this.todoList);
    console.log('newTodo', newTodo);
  }
}