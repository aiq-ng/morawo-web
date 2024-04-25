import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-articles',
  templateUrl: './our-articles.component.html',
  styleUrls: ['./our-articles.component.css']
})
export class OurArticlesComponent {
  @Input() blogs: any = []
  blogPosts: any = [
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
