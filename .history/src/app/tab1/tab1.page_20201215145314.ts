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

    // Enregistrer l'objet dans le tableau
    //  this.todoList.push(newTodo);

    // Vérifier
    console.log('todoList tableau', this.todoList);
    console.log('newTodo add in array ', newTodo);

    //reset input
    this.valueInput = '';

    if (this.todoList.length > 9) {
      this.disableButton = true;
      this.limit = `Vous avez atteint la limite de ${this.todoList.length} todo dans votre liste !`;
    } else {
      // Enregistrer l'objet dans le tableau
      this.todoList.push(newTodo);
      this.limit = `Vous avez déjà ${this.todoList.length} !`;
    }
  }

  eraseTodo(item) {
    console.log('effacer', item);
    //retrouver l'index
    let index = this.todoList.indexOf(item);
    this.limit = `Vous avez ${this.todoList.length} todo!`;

    console.log(index);

    //supprimer
    if (index > -1) {
      this.todoList.splice(index, 1);
    }
  }
}
