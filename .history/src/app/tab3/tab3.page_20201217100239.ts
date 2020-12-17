import { Component } from '@angular/core';


class ideas = {
  title: string
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor() {}

  onClickIdea() {
    console.log('test');
  }
}
