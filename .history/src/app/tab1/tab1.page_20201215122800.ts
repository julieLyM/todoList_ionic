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

  //disable button
  disableButton = false;

  //limite msg
  limit = '';

  onSavingTodo() {
    // Nouvel objet vide avec la classe Todo
    let newTodo = new Todo();

    // Passer la valeur de valueInput dans l'objet vide
    newTodo.titre = this.valueInput;

    // Vérifier
    console.log('todoList tableau', this.todoList);
    console.log('newTodo add in array ', newTodo);

    //reset input
    this.valueInput = '';

    if (this.todoList.length > 10) {
      this.disableButton == true;
      this.limit = 'limite atteint';
    } else {
      // Enregistrer l'objet dans le tableau
      this.todoList.push(newTodo);
    }
  }

  eraseTodo() {
    console.log('effacer');
    
  }
}
