import { Component } from '@angular/core';

class ideas {
  title: string;
  ideas: string;
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  valueIdea = '';

  ideaList: ideas[] = [];

  onClickIdea() {
    console.log('test');
    let addIdea = new ideas();
    addIdea.title = this.valueIdea;
    console.log(addIdea);
    this.ideaList.push(this.addIdea);
  }
}
