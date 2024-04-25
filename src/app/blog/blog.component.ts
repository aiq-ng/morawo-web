import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  blogData: string = 'All';
  contents: any = [
    {
      text: 'All',
    },
    {
      text: 'Data Science',
    },
    {
      text: 'Big Data',
    },
    {
      text: 'Big Data Analytics',
    },
    {
      text: 'Artificial Intelligence ',
    },
    {
      text: 'Predictive Analysis',
    },
    {
      text: 'Machine Learning',
    },
    {
      text: 'Devops',
    },
    {
      text: 'Video Analytics',
    },
    {
      text: 'Data Mining',
    },
    {
      text: 'Data Visualisation',
    },
    {
      text: 'IOT',
    },
  ];
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
  changeView(view: string) {
    this.blogData = view;
  }
}
