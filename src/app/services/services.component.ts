import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  blogPost: any = [
    {
      image: '/assets/images/blogOne.webp',
      text: 'The Future of Agriculture: Embracing Digital Transformation',
    },
    {
      image: '/assets/images/blogTwo.webp',
      text: 'Optimizing Crop Yields with Data-Driven Decisions',
    },
    {
      image: '/assets/images/blogThree.webp',
      text: 'Maximizing Crop Yields in Africa: A Guide to Local Success',
    },
  ];
}
