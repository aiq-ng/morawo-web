import { Component, ElementRef, Renderer2, ViewChild, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent {
  @ViewChild('carouselInner') carouselInner!: ElementRef;

  currentSlideIndex = 0;
  intervalId: any;

  items = [
    {
      bgClass: 'bg-homeImage01',
      subtitle: 'Reimagine Real-World with Technology',
      title: 'Artificial Intelligence Company',
      description: 'Transform your business with our excellent innovative technologies and insights.',
    },
    {
      bgClass: 'bg-homeImage02',
      subtitle: 'For Leading Better Brilliant Future',
      title: 'Big Data Analytics Company',
      description: 'We help you to grow your business in making scalable reliable decisions.',
    },
    {
      bgClass: 'bg-homeImage03',
      subtitle: 'Obtain Data-Driven Insights and Analysis',
      title: 'Data Science Company',
      description: 'Excel your business into the power of data and analytics to make accurate decisions.',
    },
    // Add more items as needed
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
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
    const totalSlides = this.items.length;

    if (this.currentSlideIndex < totalSlides - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }

    this.updateSlide();
  }

  prevSlide() {
    const totalSlides = this.items.length;

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
  }
}
