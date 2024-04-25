import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  pageData: string = 'Data visualization';
  contents: any = [
    {
      text: 'Data visualization',
    },
    {
      text: 'Data insights',
    },
    {
      text: 'Data-driven decisions',
    },
    {
      text: 'Alerts and predictions',
    },
  ];
  changeView(view: string) {
    this.pageData = view;
  }
}
