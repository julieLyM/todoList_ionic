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
    todo = this.list.push(event);
    console.log(todo);
  }
}
