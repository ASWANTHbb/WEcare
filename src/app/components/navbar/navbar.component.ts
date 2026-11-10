import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Help & FAQ', path: '/help' },
    { label: 'Contact', path: '/contact' }
  ];

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  navigateToContact() {
    this.closeMobileMenu();
    this.router.navigate(['/contact']);
  }
}
