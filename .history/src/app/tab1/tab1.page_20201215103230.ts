import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  todo = '';
  list = [];

  onSavingTodo(event) {
    console.log('tesst');
    this.todo = list.push();
    console.log(todo);
  }
}
