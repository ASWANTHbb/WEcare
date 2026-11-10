import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  newsletterEmail = '';
  newsletterSuccess = signal(false);

  subscribeNewsletter() {
    if (this.newsletterEmail && this.newsletterEmail.includes('@')) {
      this.newsletterSuccess.set(true);
      this.newsletterEmail = '';
      setTimeout(() => {
        this.newsletterSuccess.set(false);
      }, 5000);
    }
  }
}
