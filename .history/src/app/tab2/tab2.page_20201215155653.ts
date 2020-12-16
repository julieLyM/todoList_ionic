import { Component } from '@angular/core';

class Question {
  titre: string;
  couleur: string;
}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  valueInputTab2 = '';
  colorInput = '';

  //2 - declaration d'un tableau

  onSavingQuestion() {
    console.log('test btn');
  }
}
