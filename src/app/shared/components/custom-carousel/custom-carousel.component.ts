import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.css'],
})
export class CustomCarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carouselInner') carouselInner!: ElementRef;

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
