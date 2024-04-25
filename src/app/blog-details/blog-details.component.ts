import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {

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
