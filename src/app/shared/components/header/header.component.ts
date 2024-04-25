import { Component, HostListener, Renderer2,    } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private renderer: Renderer2, private router:Router ,   )  {}
  showList: boolean = false;
  navItems = [
    { path: '', label: 'Home' },
    { path: 'about', label: 'About Us' },
    { path: 'services', label: 'Service' },
    { path: 'industries', label: 'Industries' },
    { path: 'blog', label: 'Blog' },
    
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sectionHead = document.querySelector('.section-head');

    if (window.scrollY > 0) {
      this.renderer.addClass(sectionHead, 'scrolled');
    } else {
      this.renderer.removeClass(sectionHead, 'scrolled');
    }
  }
  onShowList = () => {
    this.showList = !this.showList;
  };
  closeShowList = () => {
    this.showList = false;
  };
  isActivePath(path: string): string {
    // Get the current URL path
    const currentPath = this.router.url.split('/')[1]; // Assuming you only have one level of routing
  
    // Check if the current path matches the provided path
    if (path === '' && currentPath === '') {
      return 'active'; // Return 'active' if it's the home page (empty path)
    } else if (path !== '' && currentPath === path) {
      return 'active'; // Return 'active' if it's any other non-empty path
    } else {
      return ''; // Return empty string if the path doesn't match
    }
  }
  scrollToFooter() {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }
  navigateToHome() {
    this.router.navigate([''])

  }
}
