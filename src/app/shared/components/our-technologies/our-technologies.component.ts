import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-our-technologies',
  templateUrl: './our-technologies.component.html',
  styleUrls: ['./our-technologies.component.css'],
})
export class OurTechnologiesComponent implements AfterViewInit, OnDestroy  {
  @ViewChild('carouselInner') carouselInner!: ElementRef;

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

  currentSlideIndex = 0;
  intervalId: any;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slides every 5 seconds
  }

  clearAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
 
    if (!this.carouselInner) return;

    const totalSlides = this.carouselInner.nativeElement.children.length;

    if (this.currentSlideIndex < totalSlides - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }

    this.updateSlide();
  }

  prevSlide() {
    if (!this.carouselInner) return;

    const totalSlides = this.carouselInner.nativeElement.children.length;

    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = totalSlides - 1;
    }

    this.updateSlide();
  }

  private updateSlide() {
    const carouselWidth = this.carouselInner.nativeElement.clientWidth;
    this.renderer.setStyle(
      this.carouselInner.nativeElement,
      'transform',
      `translateX(-${this.currentSlideIndex * carouselWidth}px)`
    );
    this.renderer.setStyle(
      this.carouselInner.nativeElement,
      'transition',
      'transform 0.5s ease'
    );
  }
}
