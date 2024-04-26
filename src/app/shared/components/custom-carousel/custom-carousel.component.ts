// custom-carousel.component.ts
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.css'],
})
export class CustomCarouselComponent {
  @ViewChild('carouselInner') carouselInner!: ElementRef;

  currentSlideIndex = 0;
  constructor(private renderer: Renderer2) {}

  nextSlide() {
    if (!this.carouselInner) return;

    const carouselWidth = this.carouselInner.nativeElement.clientWidth;
    const totalSlides = this.carouselInner.nativeElement.children.length;

    if (this.currentSlideIndex < totalSlides - 1) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }

    this.renderer.setStyle(
      this.carouselInner.nativeElement,
      'transform',
      `translateX(-${this.currentSlideIndex * carouselWidth}px)`
    );
  }

  prevSlide() {
    if (!this.carouselInner) return;

    const carouselWidth = this.carouselInner.nativeElement.clientWidth;
    const totalSlides = this.carouselInner.nativeElement.children.length;

    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = totalSlides - 1;
    }

    this.renderer.setStyle(
      this.carouselInner.nativeElement,
      'transform',
      `translateX(-${this.currentSlideIndex * carouselWidth}px)`
    );
  }
}
