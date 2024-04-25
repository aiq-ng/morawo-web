import { Component, ElementRef, OnInit } from '@angular/core';
import { Carousel, initTWE } from 'tw-elements';


@Component({
  selector: 'app-our-technologies', 
  templateUrl: './our-technologies.component.html',
  styleUrls: ['./our-technologies.component.css'],
})
export class OurTechnologiesComponent {
  constructor(private elementRef: ElementRef) {}

  techData: any = [
    {
      image: '/assets/icons/tech/one.svg',
    },
    {
      image: '/assets/icons/tech/two.svg',
    },
    {
      image: '/assets/icons/tech/three.svg',
    },
    {
      image: '/assets/icons/tech/four.svg',
    },
    {
      image: '/assets/icons/tech/five.svg',
    },
    {
      image: '/assets/icons/tech/six.svg',
    },
    {
      image: '/assets/icons/tech/seven.svg',
    },
    {
      image: '/assets/icons/tech/eight.svg',
    },
    {
      image: '/assets/icons/tech/nine.svg',
    },
    {
      image: '/assets/icons/tech/ten.svg',
    },
    {
      image: '/assets/icons/tech/eleven.svg',
    },
    {
      image: '/assets/icons/tech/twelve.svg',
    },
    {
      image: '/assets/icons/tech/thirteen.svg',
    },
    {
      image: '/assets/icons/tech/fourteen.svg',
    },
    {
      image: '/assets/icons/tech/fifteen.svg',
    },
  ];
  ngOnInit() {
    // Initialize tw-elements
    initTWE({ Carousel });
    
    // Now you can use Carousel component
    const carousel = new Carousel(this.elementRef.nativeElement.querySelector('.tw-carousel'));
    // Customize and use the carousel instance as needed
  }
  
}
