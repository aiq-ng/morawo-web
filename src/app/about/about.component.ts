import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  values: any = [
    {
      mainText: 'Our Mission',
      text: 'To transform business through advanced data tools, Artificial Intelligence, and Data Science to make decision making less complex and create valuable insights for scalable business.',
    },
    {
      mainText: 'Our Vision',
      text: 'To build best Data Models, Artificial Intelligence that enhances user’s experience and delivers impactful results for their business. The vision is to turn an organization into a data-driven organization through Data Tools to AI.',
    },
  ];
}
