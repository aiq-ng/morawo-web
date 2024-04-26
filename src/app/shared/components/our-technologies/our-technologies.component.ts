import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-technologies',
  templateUrl: './our-technologies.component.html',
  styleUrls: ['./our-technologies.component.css'],
})
export class OurTechnologiesComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  currentSlideIndex = 0;

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

  techOne: any = [
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
  ];
  techTwo: any = [
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
  ];
  techThree: any = [
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

  techFour: any = [
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
  ];
  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 2000); // Change slide every 3 seconds
  }

  nextSlide() {
    const carousel = document.querySelector('.carousel-inner') as HTMLElement; // Assert type to HTMLElement
    if (!carousel) return; // Check if carousel is null

    const carouselWidth = carousel.clientWidth;
    const totalSlides = carousel.children.length;

    if (this.currentSlideIndex < totalSlides - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }

    carousel.style.transform = `translateX(-${
      this.currentSlideIndex * carouselWidth
    }px)`;
  }

  prevSlide() {
    const carousel = document.querySelector('.carousel-inner') as HTMLElement; // Assert type to HTMLElement
    if (!carousel) return; // Check if carousel is null

    const carouselWidth = carousel.clientWidth;
    const totalSlides = carousel.children.length;

    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = totalSlides - 1;
    }

    carousel.style.transform = `translateX(-${
      this.currentSlideIndex * carouselWidth
    }px)`;
  }
}
