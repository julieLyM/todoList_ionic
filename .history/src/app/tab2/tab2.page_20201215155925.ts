import { Component } from '@angular/core';

//1- declarer une class
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

  //2 - declaration d'un tableau dans lequel les questions seront stockees
  questionList : Question[] = [];

  onSavingQuestion() {
    console.log('test btn');
  //nouvel objet vide
  let questionAdd = 
  }
}
