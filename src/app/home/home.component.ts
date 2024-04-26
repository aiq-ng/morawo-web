import { Component, AfterViewInit, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit  {
  constructor() { }

  slides = ['/assets/images/img-one.png', '/assets/images/img-two.png', 'image3.jpg'];
 
  ngAfterViewInit() {
   
  }
  

  afterChange(event: any) {
    console.log('After change event');
  }
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
