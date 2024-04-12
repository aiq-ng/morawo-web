import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private renderer: Renderer2) {}
  showList: boolean = false;
  navItems = [
    { path: '#about', label: 'About Us' },
    { path: '#services', label: 'Our Services' },
    { path: '#solution', label: 'Solution' },
    { path: '#blog', label: 'Blog' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sectionHead = document.querySelector('.section-head');
    const navControl = document.querySelector('.nav-control');

    if (window.scrollY > 0) {
      this.renderer.addClass(sectionHead, 'scrolled');
      this.renderer.addClass(navControl, 'scrolled');
    } else {
      this.renderer.removeClass(sectionHead, 'scrolled');
      this.renderer.removeClass(navControl, 'scrolled');
    }
  }
  onShowList = () => {
    this.showList = !this.showList;
  };

  closeShowList = () => {
    this.showList = false;
  };

  handleOpenModal = () => {};
}
