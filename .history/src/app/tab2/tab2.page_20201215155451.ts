import { Component } from '@angular/core';

class Question {
  titre: string;
  
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

  onSavingQuestion(){
    console.log('test btn')
  }
}
